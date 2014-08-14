// JavaScript Document

// Creates an array. Each element in that array is an array representing a lesson. Each lesson aray is loaded with objects (collections of data).

/* Sample Slide:
{
	title: "Slide Title",
	transcript: "Slide Transcript",
	resources: [ "Dynetics Website|http://www.Dynetics.com","Other link text|Other link link"],
	page_link: "page.html"
}
*/
var slides = [
		{
			lesson_title: "",
			slides: [
				{
					title: "",
					transcript: "Welcome to IPAC IMI",
					resources: [ "Dynetics Website|http://www.Dynetics.com","IPAC AH64 Quick Reference Guide|pdfs/ipac_ah64_quick_reference_guide.pdf" ],
					page_link: "splash.html"		
				}
			]
		},
		{
			lesson_title: "2. Prepare a PPC Using PPC-OH58 R1",
			slides: [
				{
					title: "2.4 Configuring the Basic Aircraft Items",
					transcript: "Now, let’s configure the basic aircraft items. We’ll perform these actions on the Operating Aircraft Configuration dialog by entering and verifying data on the available tabs.<br />For the purposes of this training, enter and verify the necessary data on the General tab.<br />Verify 2412 in the Internal fuel capacity field for the main fuel system.<br />Enter 2680 in the External fuel capacity field.<br />Enter 9406487 in the Aircraft serial number field.<br />Verify that the MDS field contains UH-60L for the aircraft type.<br />Enter 11523 in the Basic weight field.<br />Enter 840 in the Fixed operating items weight field for the Crew and Crew Baggage weight.<br />Enter 688 in the Jettison operating items weight field, which is the weight of two empty CEFS tanks.<br />Now, let’s set the Aircraft Configuration tab. Click the tab to display it, and then enter or verify the required data.<br />Select Installed from the EIBF drop-down list.<br />Enter .95 in the Engine #1 Torque Factor field.<br />Verify 1.000 in the Engine #2 Torque Factor field.<br />Select 701D/CC from the Engine Type drop-down list.<br />Select Installed from the ESSS drop-down list.<br />Click the Drag Only Items tab to display it, and then select or verify the installed equipment.<br />For this exercise:<br />Select Total System for CMWS.<br />Select Installed for Electro-Optic Missile Sensors Fifth Sensor.<br />Finally, let’s define any Custom Configuration Items. Click Items… on the Drag Only Items tab. Here you can check boxes as needed for custom items, and enter data for all fields for each item checked when preparing a PPC.<br />For this exercise:<br />Check the box before Custom Item #1.<br />Enter Test SATCOM Antenna in the Name field.<br />Enter .44 in the Drag field.<br />Enter .001 in the Download field.<br />Check the box before Custom Item #2.<br />Enter 2 CEFS Tanks in the Name field.<br />Enter -1.70 in the Drag field.<br />Enter -0.011 in the Download field.<br />These are our only Custom Items to enter in this scenario, so we can click OK to close the dialog.<br /><br />Click Close to close the Operating Aircraft Configuration dialog.<br />To use the data input in the Operating Aircraft Configuration dialog for future performance planning sessions, let’s export the aircraft configuration data we have just created.<br />Select File, then Aircraft Configuration (ACFG), then Export Aircraft Configuration.<br />Choose the Windows desktop as your file location.<br />Name the file 9406487.<br />Select Save and then click OK.",
					resources: [],
					page_link: "M2_L4.html"
				},
				{
					title: "2.6 Exploring Planning Values with the PAT",
					transcript: "Now that we have completed our PPC, we’ll right-click Departure from the Route tree and click Send to All PAT Tabs. You can also click the Performance Awareness Tool icon on the toolbar, or View, then Performance Awareness. Whichever path you choose, you can then explore planning values with the Performance Awareness Tool for Torque, Airspeed, and Gross Weight. Input fields can be changed to explore different values, or the Slider Bars can be moved to change input values.<br /><br />IMI DEVELOPER: Here the IMI should show selection of the Get Values from Route Point… button, selection of the Route point drop-down list, selection of CRS, then OK.<br /><br />Select Get Values from Route Point… and select each point as needed when preparing a PPC to explore planning values. Close the PAT when exploration is complete.",
					resources: [],
					page_link: "L4_006.html"
				},
				{
					title: "2.7 Review and Print the PPC",
					transcript: "Click the Print Preview icon on the IPAC Toolbar to review the PPC before printing.<br /><br />Click the Print icon on the Print Preview toolbar to print the completed PPC, and then close the Print Preview dialog.<br /><br />When you close the PPC application, a dialog displays asking if you want to save the file, which will have a .ipac extension. Saving the file as a .ipac file, saves all data entered in the current planning session. We won’t save the file at this time, so let’s click No to close the application.",
					resources: [],
					page_link: "L4_007.html"
				},
				{
					title: "2.8 Summary",
					transcript: "You have completed this lesson on the IPAC PPC-OH58 application.<br /><br />In this lesson you learned how to:<br /><br />Prepare, preview, and print a performance planning card.<br /><br />Explore planning values using the Performance Awareness Tool.",
					resources: [],
					page_link: "L4_008_Summary.html"
				},
				{
					title: "2.9 Lesson Quiz",
					transcript: "Lesson Quiz",
					resources: [],
					page_link: "L2_008_quiz.html"
				}
			]
		}
];