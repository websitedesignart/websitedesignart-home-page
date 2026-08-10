---
name: humanize-writing
description: >
  Final read-aloud / natural-speech check for WebsiteDesignArt page copy, run AFTER
  the humanizer skill's pass. Also hosts the AI-patterns dictionary referenced by
  the local-seo-content skill. Humanization itself (pattern detection, vocabulary,
  structure, rewrite passes) is owned by the humanizer skill — use that for
  "humanize this" requests.
---

# Read-Aloud / Natural-Speech Check

> **Scope note:** Humanization for this project is owned by `.claude/skills/humanizer/SKILL.md`
> (blader/humanizer). This skill deliberately contains no pattern catalogs, vocabulary lists,
> or rewrite passes — it is a single complementary final check, plus one hosted reference file.
>
> `references/ai-patterns-dictionary.md` is retained because the `local-seo-content` skill's
> BANNED LANGUAGE section references it as the full tiered dictionary. Do not delete it.
> (Source: https://github.com/lguz/humanize-writing-skill, MIT.)

## When to run

After `local-seo-content` has produced content and the `humanizer` skill has completed its
draft → audit → final loop. This is the last check before content is presented for review.

## The test

Read the final copy as if speaking it to a real customer.

Check whether:

- sentences sound natural when spoken;
- any sentence feels unnecessarily polished or artificial;
- the wording sounds like a press release rather than a business person;
- paragraphs feel mechanically constructed;
- the copy contains information that could apply to almost any company after changing a few nouns;
- the reader would naturally understand what the business is saying.

Revise only when the change improves clarity, naturalness, specificity, or usefulness.

Do not introduce deliberate mistakes, slang, fake personality, fake opinions, or awkwardness.

## Project constraints (always apply)

- Verified business facts, keyword/topic ownership, internal-link purpose, search intent,
  and the page's H1/H2/H3 structure survive every revision untouched.
- The site's approved voice deliberately uses em dashes in heroes, cards, and headings.
  An em dash is never, by itself, treated as proof of AI writing; reduce only genuine
  repetitive overuse within a single paragraph.
- Professional commercial tone: no required anecdotes, opinions, jokes, contractions,
  fragments, or informality. Natural ≠ casual.
