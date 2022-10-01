git init/clone - initialize/clone a local repository
git add <file> || . || *.<extension> - add a file/all files to stage area
git rm <file> - remove a file
git commit -m "message" - add a file to local repository
git commit --amend || -m "message" - change/fix the last commit
git commit -am "message" - add changes from a tracked file (file already committed) to local repository no need to run 'git add'
git status - show all status of branch
git log - show all logs for first five files per default
git log --oneline - show all logs with their hash (names)
git diff - shows the difference between the files we have in our local repository and in our working directory
git diff --color-words - shows changes with a green highlight
git diff --staged - shows the difference between the files we have in our local repository and in the stage area
git restore <file> || . - reverts changes that were made to the file/all files
git restore --staged <file> || . - remove a file/all files from stage area
git mv <file> <newFile> || <directory/file> - rename a file if you want to change the name or change the file's current directory
git checkout <commit hash> -- <file> - recover files from previous commits
git clean -n - show working directory files (untracked files) that will be deleted
git clean -f - delete files from working directory (untracked files)
git revert HEAD~<commit index> || <commit hash> - reverts a commit
git show <commit hash> - show what is in a local repository at any point in history
git show <commit hash> -- <directory/file> - show what is in a local repository at any point in history by specifying a file/directory
git rm -r --cached . - git stops tracking all files, ideal if you have any files in your repository that you have added to .gitignore, important after that, run the command 'git add .' and make a commit
