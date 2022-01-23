const Page = require('./page');

class TablesPage extends Page {

    get sortDownElem(){
        return $('th[class="header"]:first-child')
    }

    get threadElements() {
        return $$("table[class='sortable'] tbody tr td:nth-child(1)"); //array of elements
    }

     async getTextElem(){
         const texts = this.threadElements.map(async(element)=>{
          console.log(await element.getText());
      })

  return texts;

    };


    get athletesNameListText(){
        const athletesList = [];
        return this.threadElements.map((element)=>{ // returns an array of (unsorted) names
            athletesList.push(element.getText());

        });
    }

    get sortedAthletesNameList(){
        const sortedAthletesNameList = [];
        return this.athletesNameListText.sort(); // returns a sorted array with the athlete names
    }

    hitSort(){
       return this.sortDownElem.click();
    }



    async open(){
        await super.open();
    }

}
module.exports = new TablesPage();
