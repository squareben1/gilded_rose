# Gilded Rose Tech test #

I have been asked by Allison, the propietor of a small, well situated hostelry, to update the inn's inventory management system. It's previous developer had a clear penchant for i/else statements and the code required a little re-organizing before I felt comfortable adding in the new functionality required. 

In testing the existing code I found several 'existing' features which did not work correctly (or at all), and had to fix these before I could conitnue. Specifically, the value of Brie did not increase by 2 when sellIn went below 10 and did not increase by 3 when sellin went below 5. The value of brie also did not hit zero when sellin did. These were corrected before any refactoring took place. 

This is the outline for the program when it reached me (after I made the repairs mentioned above):

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