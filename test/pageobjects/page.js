/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
class Page {
    
    async open(path=" ") {
        await browser.url(`https://www.bu.edu/tech/services/cccs/websites/www/wordpress/how-to/sortable-searchable-tables/${path}`);
    }
}

module.exports= Page
