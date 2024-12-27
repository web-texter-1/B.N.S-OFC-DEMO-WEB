async function fetchNews() {
    try {
        const response = await fetch('https://newsapi.org/v2/top-headlines?country=LK&apiKey=c218a81e327247a499fa2756ad4af46c');
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();
        const tickerContent = document.querySelector('.ticker-content');
        tickerContent.innerHTML = ''; // Clear existing content

        data.articles.forEach(article => {
            const newsItem = document.createElement('span');
            newsItem.textContent = article.title; // Assuming the API returns a title
            tickerContent.appendChild(newsItem);
        });
    } catch (error) {
        console.error('Error fetching news:', error);
    }
}

fetchNews();
