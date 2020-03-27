# Gilded Rose Tech test #

I have been asked by Allison, the propietor of a small, well situated hostelry, to update the inn's inventory management system so that it can account for a new type of product. The system's previous developer Leeroy had a clear penchant for if/else statements and the code required a little re-organizing before I felt comfortable adding in the new functionality required. To ensure the program functioned as originally intended after my refactoring I started my writing tests for each of the requirements detailed below. 

## EDIT: Key Learns from revisiting this project on 27/03/20

I looked over this project again while putting my portfolio and CV together. While doing this I found that my code on this kata had major flaws - for some reason I was passing the 'i' iterator down from Shop>updateItems into all other functions, rather than just passing the individual item resulting from the iteration. This meant I ended up with functions that looked like this:

```   decreaseQuality(i, num, items) {
    if (items[i].name != 'Sulfuras, Hand of Ragnaros') {
        if (items[i].quality - num < 0) {
          items[i].quality = 0
        } else {
          items[i].quality = items[i].quality - num;
        }
      }
  };
  ``` 

  I spent an hour or so today fixing this. In doing so I realised I needed to write proper unit tests for regularItems and specialItems. I did this and used the tests to drive the refactor. 

  I left the existing tests but renamed the file to shopFeatureSpec and moved it into features as I feel this more accurately describes what it does. This kata has unit tests, feature tests and integration tests (those based on the golden copy). 

  In the new unit tests I test for function rather than state - a concept I recall a coach explaining to me at the time and which I I more fully understand after this revisit. 

  Revisiting this exercise has been extremely valuable - I now feel I understand several concepts more fully. I also see the value in revisiting your code a while after 'finishing' it. I think I was so wrapped up in just making it work originally that I failed to step back and ask myself if that way was best. Clearly it wasn't but thats OK! This revisit has been at least as valuable as actually completing the kata in the first place. 

## Features ##

This is the outline for the program as it was when it reached me:

	- All items have a SellIn value which denotes the number of days we have to sell the item
	- All items have a Quality value which denotes how valuable the item is
	- At the end of each day our system lowers both values for every item

More specifically:  
	- Once the sell by date has passed, Quality degrades twice as fast  
	- The Quality of an item is never negative  
	- "Aged Brie" actually increases in Quality the older it gets  
	- The Quality of an item is never more than 50  
	- "Sulfuras", being a legendary item, never has to be sold or decreases in Quality  
	- "Backstage passes", like aged brie, increases in Quality as its SellIn value approaches;  
    Quality increases by 2 when there are 10 days or less and by 3 when there are 5 days or less but  
	Quality drops to 0 after the concert

This was the specification for the new type of item the system needed to account for: 

- "Conjured" items degrade in Quality twice as fast as normal items

To ensure my refactored version continued to meet these requirements I wrote unit tests to test each individual requirement and created an overarching feature test based on the Golden Copy. I created feature tests for both the original specification and the new specification (i.e. a new set of feature tests that account for the introduction of the new 'Conjured' items).

The program now meets all of these requirements, is much more readable and encapsulated and is fully tested. 

## Code and Tests ## 

The program was written in Javascript and tested with Jasmine. 

To run the tests simply open specRunner.html in your browser. The Golden Copy is saved in lib. 

## Installation ## 

To run the program download it from this repo. You will then be able to create a new Shop object, passing in Item objects. Update the number of ```days``` and which Items you would like to include in the ```items``` array. You can then run the ```updateItems``` function as below for a readable print out of your inventory: 

``` 
    const items = [
      new Item("+5 Dexterity Vest", 10, 20), //
      new Item("Aged Brie", 2, 0), //
      new Item("Elixir of the Mongoose", 5, 7), //
      new Item("Sulfuras, Hand of Ragnaros", 0, 80), //
      new Item("Sulfuras, Hand of Ragnaros", -1, 80),
      new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20),
      new Item("Backstage passes to a TAFKAL80ETC concert", 10, 49),
      new Item("Backstage passes to a TAFKAL80ETC concert", 5, 49),
      new Item("Conjured Mana Cake", 3, 6)
    ];

    var gildedRose = new Shop(items)
    var days = 1;
    
    var actualResult = ""
    for (let i = 0; i < days; i++) {
    actualResult = actualResult + ("-------- day " + i + " --------\n");
    actualResult = actualResult + ("name, sellIn, quality\n");
    items.forEach(element => {
      actualResult = actualResult + (element.name + ', ' + element.sellIn + ', ' + element.quality +"\n");
    });
    gildedRose.updateItems()
    }
    console.log(actualResult)
```

## Example Output ##

Below is a section of an example of what above code will print:
![](./lib/screenshot.png)

## Credits ##

Completed by Ben Gittins. 

This Kata was taken from Emily Bache's Gilded Rose Kata Repo: https://github.com/emilybache/GildedRose-Refactoring-Kata
