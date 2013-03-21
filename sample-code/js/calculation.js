/**************************************************************************
*                                                                         *
*   Code copyright C Davies 03/11/2011                                    *
*    www.chris-davies.com                                                 *
*                                                                         *
*    Use this code at your own risk!                                      *
*                                                                         *
*   You are free to use this code as long as the comment                  *
*    herein is left intact.                                               *
*                                                                         *
*    This code is not guaranteed fit for any particular purpose           *
*    and no responsibility will be or is implied for its use.             *
*                                                                         *
*    The code here allows a user to see how much money the user can save  *
*    if they install solar panels.                                        *
*    The algorithm used - 0.8 x kWp x S x Zpv - is an industry standard   *
*    and takes into account the direction of the roof, the angle of tilt  *
*    of the roof, the amount of shade that is available and the number    *
*    solar panels that may be installed. The applicaiton is designed      *
*    so the user can select the dropdown select boxes to achieve their    *
*    required result, full instructions are given on HTML the page itself.*
*                                                                         *
*                                                                         *
***************************************************************************/


function populateList() {
    "use strict";
    var angleList;
    angleList = document.SolarCalc.facingWall;

   // Clear out the list  then set second list depending on value of first list

   clearOptions(document.SolarCalc.tiltAngle);

   if (angleList[angleList.selectedIndex].value === "1") {
      addToOptionList(document.SolarCalc.tiltAngle, "1042", "30");
      addToOptionList(document.SolarCalc.tiltAngle, "1023", "45");
      addToOptionList(document.SolarCalc.tiltAngle, "960", "60");
      addToOptionList(document.SolarCalc.tiltAngle, "724", "vertical");
      addToOptionList(document.SolarCalc.tiltAngle, "933", "horizontal");
   }

   if (angleList[angleList.selectedIndex].value === "2") {
      addToOptionList(document.SolarCalc.tiltAngle, "997", "30");
      addToOptionList(document.SolarCalc.tiltAngle, "968", "45");
      addToOptionList(document.SolarCalc.tiltAngle, "900", "60");
      addToOptionList(document.SolarCalc.tiltAngle, "684", "vertical");
      addToOptionList(document.SolarCalc.tiltAngle, "933", "horizontal");
   }

   if (angleList[angleList.selectedIndex].value === "3") {
      addToOptionList(document.SolarCalc.tiltAngle, "886", "30");
      addToOptionList(document.SolarCalc.tiltAngle, "829", "45");
      addToOptionList(document.SolarCalc.tiltAngle, "753", "60");
      addToOptionList(document.SolarCalc.tiltAngle, "565", "vertical");
      addToOptionList(document.SolarCalc.tiltAngle, "933", "horizontal");
   }

   if (angleList[angleList.selectedIndex].value === "4") {
      addToOptionList(document.SolarCalc.tiltAngle, "762", "30");
      addToOptionList(document.SolarCalc.tiltAngle, "666", "45");
      addToOptionList(document.SolarCalc.tiltAngle, "580", "60");
      addToOptionList(document.SolarCalc.tiltAngle, "427", "vertical");
      addToOptionList(document.SolarCalc.tiltAngle, "933", "horizontal");
   }

      if (angleList[angleList.selectedIndex].value === "5") {
      addToOptionList(document.SolarCalc.tiltAngle, "709", "30");
      addToOptionList(document.SolarCalc.tiltAngle, "621", "45");
      addToOptionList(document.SolarCalc.tiltAngle, "486", "60");
      addToOptionList(document.SolarCalc.tiltAngle, "360", "vertical");
      addToOptionList(document.SolarCalc.tiltAngle, "933", "horizontal");
   }
}

function clearOptions(OptionList) {
   "use strict";
   var x;
   // Always clear an option list from the last entry to the first
   for (x = OptionList.length - 1; x >= 0; x--) {
      OptionList[x] = null;
   }
}

function addToOptionList(OptionList, OptionValue, OptionText) {
   // Add option to the bottom of the list
   "use strict";
   OptionList[OptionList.length] = new Option(OptionText, OptionValue);
}

  // Round to 2 decimal places

function r2(n) {
  "use strict";
  var ans;
  var len;
  ans = n * 1000;
  ans = Math.round(ans /10) + "";
  while (ans.length < '3')
     {
             ans = "0" + ans;
     }
             len = ans.length;
             ans = ans.substring(0,len-2) + "." + ans.substring(len-2,len);
             return ans;
}

function solarPanelCalculation(){
        "use strict";
         var selectedTilt;
         var tiltAngle;
         var selectedShade;
         var overShading;
         var panels;
         var systemSize;
         var total;
         var annualFIT;
         var exportReturn;
         var currentPrice;


         selectedTilt   = document.SolarCalc.tiltAngle.selectedIndex;
         tiltAngle      = document.SolarCalc.tiltAngle.options[selectedTilt].value;
         selectedShade  = document.SolarCalc.overShading.selectedIndex;
         overShading    = document.SolarCalc.overShading.options[selectedShade].value;
         panels         = document.SolarCalc.systemSize.selectedIndex;
         systemSize     = document.SolarCalc.systemSize.options[panels].value;

         total =  0.8 * systemSize *  tiltAngle * overShading;

         window.document.SolarCalc.input01.value = r2(total);
         window.document.SolarCalc.input02.value = r2(total * 0.413);
         window.document.SolarCalc.input03.value = r2((total)/2 * 0.03);
         window.document.SolarCalc.input04.value = r2((total)/2 * 0.12);

         annualFIT       = r2((total) * 0.413);
         exportReturn    = r2((total)/2 * 0.03);
         currentPrice    = r2((total)/2 * 0.12);
         //using parseFloat to convert strings to numbers and r2 function to round to 2 decimal places
         window.document.SolarCalc.input05.value = r2(parseFloat(annualFIT) + parseFloat(exportReturn) + parseFloat(currentPrice));
}