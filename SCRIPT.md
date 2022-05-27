# Script

## Effective Feature Toggling

- welcome
- introduce self
- or "feature flags"

## Agenda

- tips as we go
- call out questions as we 

## The problem

- Can feature 1 be released?

## The Solution: Feature Toggles

- resist the urge to refactor the old code
  - reduces the risk of messing things up
  - some duplication is fine

## Discussion

- When not integrating code often
- Very small teams
- Nothing is live

## Setting feature toggles

- However you app is configured
- keep is simple to start with

## Tip - Encapsulate Checks

- Missing toggles should always return a default value, usually `false`

# Enabling CI/CD

- There may still be some manual gates between environments

# Rolling features through environments

- apply your own logic to this
