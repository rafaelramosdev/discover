git push origin <branchName> -used to send the local repository to github
git push origin --delete <branchName> - used to delete a branch on github
git pull origin <branchName> - serves to pull the latest version of the github repository to the local repository
git branch - show all existing branches on local repository
git branch -a - show all existing branches on local repository and github
git branch -D <brachName> - used to delete a branch in the local repository
git checkout <branchName> - used to switch branches
git checkout -b <branchName> - serves to create a new branch and switch to it
git merge <branchName> - used to merge branches (in most cases, make sure you are on the main branch before executing this command)
git fetch - serves to update the branches that are in github to the branches of the local repository
git fetch -p - serves to update the branches of the local repository (generally used when you delete a branch on github but it still exists in the local repository)
