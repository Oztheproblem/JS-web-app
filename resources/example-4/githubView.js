class GithubView {
  constructor(model, client) {
    this.model = model;
    this.client = client;

    const submitButtonEl = document.querySelector('#submit-button');
    const repoInputEl = document.querySelector('#repo-name-input');

    submitButtonEl.addEventListener('click', () => {
      const repoName = repoInputEl.value;

      this.client.getRepoInfo(repoName, repoData => {
        this.display(repoData);
      });
    });
  }

  display(repoData) {
    const repoNameEl = document.querySelector('#repo-name');
    const repoDescriptionEl = document.querySelector('#repo-description');
    const repoImageContainerEl = document.querySelector('#repo-image-container');

    // Set the content of the #repo-name and #repo-description elements
    repoNameEl.textContent = repoData.full_name;
    repoDescriptionEl.textContent = repoData.description;

    // Create an img element and set its source to the avatar URL
    const imgEl = document.createElement('img');
    imgEl.src = repoData.organization.avatar_url;

    // Append the img element to the container
    repoImageContainerEl.appendChild(imgEl);

  }
}

module.exports = GithubView;