// Get HTML head element 
        var head = document.getElementsByTagName('head')[0];  
  
        // Create new link Element 
        var link = document.createElement('link'); 
  
        // set the attributes for link element  
        link.rel = 'stylesheet';  
      
        link.type = 'text/css'; 
      
        link.href = 'https://rcalibrary.github.io/summon/summon-preview.css';  
  
        // Append link element to HTML head 
        document.head.appendChild(link);
	

  $('body').append('<style>.languageMenuButton { display: none !important; }</style>');

// remove top links from displaying when user is on campus

 $('body').append('<style>.list-inline { display: none !important; }</style>');

// remove Feedback from list of options

//$('body').append('<style>.list-unstyled ul > li:first-child{ display: none;}</style>');

//remove quick look button

//$('body').append('<style>.quick-look-button{ display: none !important; }</style>');

/* code to run the following function only when the rta results are back*/


$(document).ready(function() {
    const domObserver = new MutationObserver((mutationList) => {
    // document.body has changed! Do something.    
    var selection = document.querySelector("div.documentSummary") !== null;
    if(selection) {
     AppendToHoldings()
    }
	    
    });

   domObserver.observe(document.body, { childList: true, subtree: true });
   	

//let rootScope = angular.element('html').scope().$root
//  rootScope.$on('apiSuccess', (scope) => setTimeout(AppendToHoldings, 3000))
});



/*function to append text to records where the RTA Location Code requires users to do something*/

 function AppendToHoldings() {

         console.log("Enters Append");
	 console.log($('div.availabilityRta').length);
	 console.log($('div.availabilityRta'));
         //check div.availabilityInfo exists before proceeding to check if elements need adding
	 var checkExist = setInterval(function() {
         if ($('div.availabilityRta').length) {
            //console.log("Exists!");
            clearInterval(checkExist);
         }
         else {
            console.log("not present yet");
         }
         }, 100); // check every 100ms
		 
	  console.log("cleared");	 
	 
          $('div.availabilityRta').each(function () {
		  
		  var bibid = $(this).closest($('div.documentSummary')).attr('id').replace(/FETCH-rca_catalog_u/g,'').replace(/.$/,'');	  	  	  	  
		  var validSPLocs=["CRL","SPECCOLL","ARC","ARTISTBOOK","OFFSITE"];
		  var validEQLocs=["PER_NONC","PER_RES","THESES","STACK","STORE","JR","CATALOGING","IP","BIN","BOUT","PAMPHLET","QR"];
          //var LocArr = $(this).find('div.ng-scope .summonBtn').attr('title').split(','); 
	  var LocArr = $(this).find('div.ng-scope .summonBtn').attr('title').split(',');
          var Loc = LocArr[0].replace(/[\s\n]+/g,'');
                   console.log(Loc);
			if(validSPLocs.indexOf(Loc) !== -1) {
		// add link to special collections booking form 
				if($(this).find('div.ng-scope .summonBtn').parent().parent().siblings('div#specialcol').length) {
		     // skip as link already exists
				}
				else {
					//$( $(this).find('div.ng-scope') ).append( "<div id='specialcol'><em>Item in Special Collections - access by <a href='https://rca.libguides.com/c.php?g=690477&p=4946847&preview=c35121341496a0c2f17dc536ffd730d5' target='_blank'>appointment</a></em></div></br>" );
				   //$( "<div id='specialcol'><em>Item in Special Collections - access by <a href='https://rca.libguides.com/c.php?g=690477&p=4946847&preview=c35121341496a0c2f17dc536ffd730d5' target='_blank'>appointment</a></em></div></br>" ).insertAfter( $(this) );        
				 // $( "<div id='specialcol'><em>Access by appointment: please email <a href='mailto:special-collections@rca.ac.uk' target='_blank'>special-collections@rca.ac.uk</a> to arrange</em></div></br>" ).insertAfter( $(this) );  
				$( $(this).find('div.ng-scope') ).append( "<div id='specialcol'><em>Access by appointment: please email <a href='mailto:special-collections@rca.ac.uk' target='_blank'>special-collections@rca.ac.uk</a> to arrange</em></div></br>" );
				} 
			}
			if(validEQLocs.indexOf(Loc) !== -1) {
		// add link to ask at library desk
				if($(this).find('div.ng-scope .summonBtn').parent().parent().siblings('div#enqdesk').length) {
		     // skip as link already exists
				}
				else {
				   $( $(this).find('div.ng-scope') ).append( "<div id='enqdesk'><em>Ask at Library Desk</em></br></div>" );        
			   } 
			}
            else if (Loc == 'PER_CURR') {
		// add link to point to journals room - is this necessary now with shelfmap?
						if($(this).find('div.ng-scope .summonBtn').parent().parent().siblings('div#specialcol').length) {
		     // skip as link already exists
				}
				else {
				   $( $(this).find('div.ng-scope') ).append( "<div id='specialcol'><em>Latest Issue in Journals Room</em></br></div>" );
	    } 
			}
            else if (Loc == 'STORECW') {
		// add link for store content warning
						if($(this).find('div.ng-scope .summonBtn').parent().parent().siblings('div#specialcol').length) {
		     // skip as link already exists
				}
				else {
				   $( $(this).find('div.ng-scope') ).append( "<div id='specialcol'><em>Content warning: this item contains harmful and discriminatory language/imagery<br>In storage: place reservation/ask at Library Desk</em></br></div>" );
	    } 
			}	   	  
   });
 }

 

/* Adding additional Custom Links to Summon.*/

angular.module('summonApp')
.run(['configService', function (config) {
    config.data.links.custom1 = {
        href: "https://rca.libguides.com/az.php",
        label: "Online Resources A-Z"
     }
    config.data.links.custom2 = {
        href: "http://qh7vn5wm4q.search.serialssolutions.com/",
        label: "E-Journals A-Z"
     }
     config.data.links.custom3 = {
         href: "https://researchonline.rca.ac.uk/",
         label: "RCA Research Online"
     }
     config.data.links.custom4 = {
         href: "https://moodle.rca.ac.uk/course/view.php?id=9",
         label: "Library Moodle"
     }
     config.data.links.custom5 = {
         href: "https://rca.libguides.com/c.php?g=688796&p=4929377&preview=95943e5b520b75b578fafbc6ff01919f",
         label: "Suggest a Book"
     }
      config.data.links.custom6 = {
         href: "https://rca.libguides.com/c.php?g=688796&p=4929379&preview=95943e5b520b75b578fafbc6ff01919f",
         label: "Inter-library Loans"
     }
       config.data.links.custom7 = {
         href: "https://library.rca.ac.uk/client/en_GB/2015/search/patronlogin/http:$002f$002flibrary.rca.ac.uk$002fclient$002fen_GB$002fsummon$002fsearch$002faccount$002f1$003f",
         label: "My Account"
     }        
        config.data.links.custom8 = {
         href: "https://rca.libguides.com/alumniaccess",
         label: "External Visitors"
     }                
 }]);
