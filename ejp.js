/* An attempt to change Single Journals to Publisher Site to make the experience for end user better */
$(document).ready(function() {
console.log("work, you bastard");
	
	 $('a.results-dbRef').each(function () {

          var DbArr = $(this).text().split(',');          
          var DbType = DbArr[0].replace(/[\s\n]+/g,'');

          if (DbType == 'SingleJournals') {
              console.log("Change to Publishers Site");
              $(this).text("Publishers Site");
          } 

		  });
		 })
		 

