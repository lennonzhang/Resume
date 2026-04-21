## Tool Usage Guardrails

- **Confirm context first**: before bulk operations, check `pwd`, current branch/status, and `git worktree list --porcelain`.
- **Prefer dedicated tools**: use `Read` for files, `Grep` for content search, `Glob` for file discovery, `Edit` for existing-file changes, and `Write` only for new files or intentional full-file rewrites.
- **Pass optional parameters correctly**: omit unused optional fields entirely; do not pass empty strings as placeholders. For example, only PDFs should use `pages`.
- **Be conservative with parallel Bash**: parallelize only independent, read-only, high-confidence commands. Run path checks, exploratory commands, Windows `/FLAG`-style commands, and destructive commands separately or sequentially.
- **Prefer absolute paths in worktree-heavy flows**: for cross-worktree operations, bulk commands, and delete/restore actions, use absolute paths and do not assume the current directory is the repo root.
- **Align scope before destructive actions**: before `git restore`, `git worktree remove --force`, file deletion, or any action that discards local changes, list the exact files or worktrees first and get explicit authorization before executing.
- **Verify the target before updating it**: `Read` an existing file before editing it, and verify the correct task id before calling `TaskUpdate`.
- **Use PowerShell for Windows-native commands**: do not force Windows `/FLAG`-style system commands through Bash, especially not in parallel calls.