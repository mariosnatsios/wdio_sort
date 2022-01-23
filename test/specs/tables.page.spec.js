const tablesPage = require('../pageobjects/tables.page');


describe('Tables Page', () => {

    it('should open the main url and verify the title', async () => {
        await tablesPage.open();
        await expect(browser).toHaveTitle('Sortable & Searchable Tables : TechWeb : Boston University');
    });

    it('should check if a table is sorted', async() => {
        await tablesPage.open();
        //const initialAthletesList = await tablesPage.athletesNameListText;
        console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$")
        await tablesPage.getTextElem()
        await tablesPage.hitSort();
        const afterAthletesList = await tablesPage.athletesNameListText;
        const sortedAthletesList = await tablesPage.sortedAthletesNameList;
        expect(sortedAthletesList).toEqual(afterAthletesList);

    });


});
