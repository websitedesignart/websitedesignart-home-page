(function () {
  if (customElements.get('wda-backdrop')) return;

  const FS = [
    'precision highp float;',
    'uniform vec2 u_res; uniform float u_time; uniform vec2 u_mouse;',
    'float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7)))*43758.5453); }',
    'float noise(vec2 p){ vec2 i=floor(p); vec2 f=fract(p); vec2 u=f*f*(3.0-2.0*f);',
    '  return mix(mix(hash(i+vec2(0.0,0.0)),hash(i+vec2(1.0,0.0)),u.x), mix(hash(i+vec2(0.0,1.0)),hash(i+vec2(1.0,1.0)),u.x),u.y); }',
    'float fbm(vec2 p){ float v=0.0; float a=0.5; for(int i=0;i<4;i++){ v+=a*noise(p); p*=2.02; a*=0.5; } return v; }',
    'void main(){',
    '  vec2 uv = gl_FragCoord.xy/u_res.xy;',
    '  vec2 p = uv; p.x *= u_res.x/u_res.y; p *= 1.6;',
    '  float t = u_time*0.16;',
    '  p += vec2(-0.055, -0.030)*t;',
    '  vec2 q = vec2(fbm(p+vec2(0.00,0.60*t)), fbm(p+vec2(3.10,-0.44*t)));',
    '  vec2 r = vec2(fbm(p+1.60*q+vec2(1.7,9.2)+0.24*t), fbm(p+1.60*q+vec2(8.3,2.8)-0.21*t));',
    '  float f = fbm(p+1.80*r+vec2(-0.17*t,0.13*t));',
    '  vec3 ivory=vec3(0.975,0.950,0.920); vec3 lav=vec3(0.800,0.660,0.960);',
    '  vec3 peri=vec3(0.560,0.580,0.930); vec3 pink=vec3(0.950,0.500,0.720);',
    '  vec3 peach=vec3(0.970,0.780,0.420); vec3 white=vec3(1.000,0.995,0.985);',
    '  float a = smoothstep(0.46,0.64,q.y);',
    '  float b = smoothstep(0.34,0.62,r.x);',
    '  float c = smoothstep(0.38,0.62,f);',
    '  float pk = smoothstep(0.42,0.66,r.y);',
    '  vec3 warm = mix(ivory, peach, c*0.85);',
    '  warm = mix(warm, pink, pk*0.78);',
    '  vec3 cool = mix(lav, peri, b);',
    '  vec3 col = mix(warm, cool, a*0.95);',
    '  float hl  = pow(clamp(1.0-abs(2.0*f-1.0)*2.6,0.0,1.0), 4.0);',
    '  float hl2 = pow(clamp(1.0-abs(2.0*r.x-1.0)*2.6,0.0,1.0), 4.0);',
    '  col = mix(col, white, clamp(hl*0.65+hl2*0.45,0.0,0.90));',
    '  float d = distance(uv, u_mouse); col = mix(col, white, clamp(0.05/(d*d+0.09),0.0,1.0)*0.20);',
    '  col = clamp(col, 0.0, 1.0);',
    '  gl_FragColor = vec4(col,1.0);',
    '}'
  ].join('\n');

  const FALLBACK = 'radial-gradient(120% 90% at 50% 0%, #ffffff, #f5f3ee 70%)';

  class Backdrop extends HTMLElement {
    connectedCallback() {
      if (this._on) return;
      this._on = true;
      Object.assign(this.style, {
        position: 'fixed', inset: '0', zIndex: '0', display: 'block', pointerEvents: 'none',
      });
      const canvas = document.createElement('canvas');
      Object.assign(canvas.style, { width: '100%', height: '100%', display: 'block' });
      this.appendChild(canvas);

      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) { canvas.style.background = FALLBACK; return; }

      const sh = (type, src) => { const s = gl.createShader(type); gl.shaderSource(s, src); gl.compileShader(s); return s; };
      const prog = gl.createProgram();
      gl.attachShader(prog, sh(gl.VERTEX_SHADER, 'attribute vec2 p; void main(){ gl_Position = vec4(p,0.0,1.0); }'));
      gl.attachShader(prog, sh(gl.FRAGMENT_SHADER, FS));
      gl.linkProgram(prog);
      if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) { canvas.style.background = FALLBACK; return; }
      gl.useProgram(prog);

      const buf = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, buf);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 1,-1, -1,1, -1,1, 1,-1, 1,1]), gl.STATIC_DRAW);
      const pl = gl.getAttribLocation(prog, 'p');
      gl.enableVertexAttribArray(pl);
      gl.vertexAttribPointer(pl, 2, gl.FLOAT, false, 0, 0);

      const uRes = gl.getUniformLocation(prog, 'u_res');
      const uTime = gl.getUniformLocation(prog, 'u_time');
      const uMouse = gl.getUniformLocation(prog, 'u_mouse');

      const mouse = { x: 0.5, y: 0.6 }, tgt = { x: 0.5, y: 0.6 };
      const onMove = (e) => { tgt.x = e.clientX / window.innerWidth; tgt.y = 1 - e.clientY / window.innerHeight; };
      window.addEventListener('pointermove', onMove, { passive: true });

      // The fbm pattern is resolution-independent (scaled by aspect only), so the
      // internal render size is capped and CSS upscales the canvas: identical look,
      // a fraction of the per-frame pixel cost.
      const resize = () => {
        const scale = Math.min(1, 960 / Math.max(1, innerWidth));
        canvas.width = Math.max(1, Math.floor(innerWidth * scale));
        canvas.height = Math.max(1, Math.floor(innerHeight * scale));
        gl.viewport(0, 0, canvas.width, canvas.height);
      };
      window.addEventListener('resize', resize, { passive: true });
      resize();

      const t0 = performance.now();
      let raf = 0;
      const draw = () => {
        mouse.x += (tgt.x - mouse.x) * 0.05;
        mouse.y += (tgt.y - mouse.y) * 0.05;
        gl.uniform2f(uRes, canvas.width, canvas.height);
        gl.uniform1f(uTime, (performance.now() - t0) / 1000);
        gl.uniform2f(uMouse, mouse.x, mouse.y);
        gl.drawArrays(gl.TRIANGLES, 0, 6);
      };
      const loop = () => { draw(); raf = requestAnimationFrame(loop); };
      const start = () => { if (!raf) raf = requestAnimationFrame(loop); };
      const stop = () => { if (raf) { cancelAnimationFrame(raf); raf = 0; } };

      const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)');
      const onVis = () => { (document.hidden || reduceMotion.matches) ? stop() : start(); };
      document.addEventListener('visibilitychange', onVis);
      if (reduceMotion.addEventListener) reduceMotion.addEventListener('change', onVis);

      draw();
      if (!reduceMotion.matches) start();

      this._cleanup = () => {
        stop();
        window.removeEventListener('pointermove', onMove);
        window.removeEventListener('resize', resize);
        document.removeEventListener('visibilitychange', onVis);
        if (reduceMotion.removeEventListener) reduceMotion.removeEventListener('change', onVis);
      };
    }
    disconnectedCallback() { this._cleanup && this._cleanup(); this._on = false; }
  }

  customElements.define('wda-backdrop', Backdrop);
})();
