# Gilded Rose Tech test #

I have been asked by Allison, the propietor of a small, well situated hostelry, to update the inn's inventory management system. It's previous developer had a clear penchant for i/else statements and the code required a little re-organizing before I felt comfortable adding in the new functionality required. 

This is the outline for the program when it reached me:

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