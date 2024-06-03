const gitChangedFiles = require('git-changed-files');

const prLintAction = () => {
  gitChangedFiles({baseBranch: 'development'})
    .then(committedGitFiles => {
      const numberOfFiles = {};
      committedGitFiles.committedFiles.forEach(file => {
        numberOfFiles[file] = file;
      });
      committedGitFiles.unCommittedFiles.forEach(file => {
        numberOfFiles[file] = file;
      });
      const fileCount = Object.keys(numberOfFiles).length;
      if (fileCount > 26) {
        throw new Error(
          'Failed to commit as file changes are huge!!!, required size limit is: 20',
        );
      } else {
        console.log('pr files count check passed!!!');
      }
    })
    .catch(error => {
      if (error.message) {
        console.log(error.message);
        process.exitCode = 1;
      }
    });
};

prLintAction();
