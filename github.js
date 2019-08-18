class GitHub {
  constructor() {
    this.client_id = '2bca5aa9ab5142292cb0';
    this.client_secret = '70b5606f137ddea09787baa99ce0903e5ce41847';
    this.repo_count = 5;
    this.repos_sort = 'created: asc';
  }

  async getUser(user) {
    // Fetch user
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    // Fetch repos for user
    const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repo_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();
    const repos = await reposResponse.json();

    return {
      profile,
      repos
    };
  }
}