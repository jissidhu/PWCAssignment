$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("PWC.feature");
formatter.feature({
  "line": 1,
  "name": "PWC Carousel, Contact us and Search",
  "description": "",
  "id": "pwc-carousel,-contact-us-and-search",
  "keyword": "Feature"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I navigate to the PwC Digital Pulse website",
  "keyword": "Given "
});
formatter.match({
  "location": "CombinedStepDefinition.initilize_the_driver_with_chrome()"
});
formatter.result({
  "duration": 11276815700,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "Validate Home Page",
  "description": "",
  "id": "pwc-carousel,-contact-us-and-search;validate-home-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@home"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I am viewing the ‘Home’ page",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I am presented with a carousel displaying \"3\" featured articles",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Clicking the ‘Next’ button on the carousel will load the next \"3\" featured articles",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Clicking the ‘Previous’ button on the carousel will load the previous \"3\" featured articles",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "CombinedStepDefinition.i_am_viewing_the_home_page()"
});
formatter.result({
  "duration": 8578100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 43
    }
  ],
  "location": "CombinedStepDefinition.i_am_presented_with_a_carousel_displaying_3_featured_articles(int)"
});
formatter.result({
  "duration": 31259200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 63
    }
  ],
  "location": "CombinedStepDefinition.clicking_the_next_button_on_the_carousel_will_load_the_next_3_featured_articles(int)"
});
formatter.result({
  "duration": 90240000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 71
    }
  ],
  "location": "CombinedStepDefinition.clicking_the_previous_button_on_the_carousel_will_load_the_previous_3_featured_articles(int)"
});
formatter.result({
  "duration": 80616000,
  "status": "passed"
});
formatter.match({
  "location": "CombinedStepDefinition.quit_the_browser()"
});
formatter.result({
  "duration": 750748300,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 16,
  "name": "Validate Contact us Page",
  "description": "",
  "id": "pwc-carousel,-contact-us-and-search;validate-contact-us-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@contactus"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "I select ‘Contact us’ from the hamburger menu",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I am taken to the ‘Contact us’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "I am presented with the below options for contacts \"\u003cHeading\u003e\" \"\u003cContact Link\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Quit the browser",
  "keyword": "And "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "pwc-carousel,-contact-us-and-search;validate-contact-us-page;",
  "rows": [
    {
      "cells": [
        "Heading",
        "Contact Link"
      ],
      "line": 23,
      "id": "pwc-carousel,-contact-us-and-search;validate-contact-us-page;;1"
    },
    {
      "cells": [
        "PwC Digital Services",
        "https://digital.pwc.com/en/contact-us.html"
      ],
      "line": 24,
      "id": "pwc-carousel,-contact-us-and-search;validate-contact-us-page;;2"
    },
    {
      "cells": [
        "Digital Pulse editorial team",
        ""
      ],
      "line": 25,
      "id": "pwc-carousel,-contact-us-and-search;validate-contact-us-page;;3"
    },
    {
      "cells": [
        "Careers at PwC",
        "https://www.pwc.com/gx/en/careers.html"
      ],
      "line": 26,
      "id": "pwc-carousel,-contact-us-and-search;validate-contact-us-page;;4"
    },
    {
      "cells": [
        "General enquiries",
        "https://www.pwc.com/gx/en.html"
      ],
      "line": 27,
      "id": "pwc-carousel,-contact-us-and-search;validate-contact-us-page;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I navigate to the PwC Digital Pulse website",
  "keyword": "Given "
});
formatter.match({
  "location": "CombinedStepDefinition.initilize_the_driver_with_chrome()"
});
formatter.result({
  "duration": 10618667000,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Validate Contact us Page",
  "description": "",
  "id": "pwc-carousel,-contact-us-and-search;validate-contact-us-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@contactus"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "I select ‘Contact us’ from the hamburger menu",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I am taken to the ‘Contact us’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "I am presented with the below options for contacts \"PwC Digital Services\" \"https://digital.pwc.com/en/contact-us.html\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "CombinedStepDefinition.i_select_contact_us_from_the_hamburger_menu()"
});
formatter.result({
  "duration": 1290092500,
  "status": "passed"
});
formatter.match({
  "location": "CombinedStepDefinition.i_am_taken_to_the_contact_us_page()"
});
formatter.result({
  "duration": 7144700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "PwC Digital Services",
      "offset": 52
    },
    {
      "val": "https://digital.pwc.com/en/contact-us.html",
      "offset": 75
    }
  ],
  "location": "CombinedStepDefinition.i_am_presented_with_the_below_options_for_contacts(String,String)"
});
formatter.result({
  "duration": 80772200,
  "status": "passed"
});
formatter.match({
  "location": "CombinedStepDefinition.quit_the_browser()"
});
formatter.result({
  "duration": 819542700,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I navigate to the PwC Digital Pulse website",
  "keyword": "Given "
});
formatter.match({
  "location": "CombinedStepDefinition.initilize_the_driver_with_chrome()"
});
formatter.result({
  "duration": 10614209600,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Validate Contact us Page",
  "description": "",
  "id": "pwc-carousel,-contact-us-and-search;validate-contact-us-page;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@contactus"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "I select ‘Contact us’ from the hamburger menu",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I am taken to the ‘Contact us’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "I am presented with the below options for contacts \"Digital Pulse editorial team\" \"\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "CombinedStepDefinition.i_select_contact_us_from_the_hamburger_menu()"
});
formatter.result({
  "duration": 1202200200,
  "status": "passed"
});
formatter.match({
  "location": "CombinedStepDefinition.i_am_taken_to_the_contact_us_page()"
});
formatter.result({
  "duration": 8264400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Digital Pulse editorial team",
      "offset": 52
    },
    {
      "val": "",
      "offset": 83
    }
  ],
  "location": "CombinedStepDefinition.i_am_presented_with_the_below_options_for_contacts(String,String)"
});
formatter.result({
  "duration": 116574400,
  "status": "passed"
});
formatter.match({
  "location": "CombinedStepDefinition.quit_the_browser()"
});
formatter.result({
  "duration": 757928900,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I navigate to the PwC Digital Pulse website",
  "keyword": "Given "
});
formatter.match({
  "location": "CombinedStepDefinition.initilize_the_driver_with_chrome()"
});
formatter.result({
  "duration": 10625150400,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Validate Contact us Page",
  "description": "",
  "id": "pwc-carousel,-contact-us-and-search;validate-contact-us-page;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@contactus"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "I select ‘Contact us’ from the hamburger menu",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I am taken to the ‘Contact us’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "I am presented with the below options for contacts \"Careers at PwC\" \"https://www.pwc.com/gx/en/careers.html\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "CombinedStepDefinition.i_select_contact_us_from_the_hamburger_menu()"
});
formatter.result({
  "duration": 1309229500,
  "status": "passed"
});
formatter.match({
  "location": "CombinedStepDefinition.i_am_taken_to_the_contact_us_page()"
});
formatter.result({
  "duration": 6305300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Careers at PwC",
      "offset": 52
    },
    {
      "val": "https://www.pwc.com/gx/en/careers.html",
      "offset": 69
    }
  ],
  "location": "CombinedStepDefinition.i_am_presented_with_the_below_options_for_contacts(String,String)"
});
formatter.result({
  "duration": 104808400,
  "status": "passed"
});
formatter.match({
  "location": "CombinedStepDefinition.quit_the_browser()"
});
formatter.result({
  "duration": 750508900,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I navigate to the PwC Digital Pulse website",
  "keyword": "Given "
});
formatter.match({
  "location": "CombinedStepDefinition.initilize_the_driver_with_chrome()"
});
formatter.result({
  "duration": 10473467100,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Validate Contact us Page",
  "description": "",
  "id": "pwc-carousel,-contact-us-and-search;validate-contact-us-page;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@contactus"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "I select ‘Contact us’ from the hamburger menu",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I am taken to the ‘Contact us’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "I am presented with the below options for contacts \"General enquiries\" \"https://www.pwc.com/gx/en.html\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "CombinedStepDefinition.i_select_contact_us_from_the_hamburger_menu()"
});
formatter.result({
  "duration": 1194159600,
  "status": "passed"
});
formatter.match({
  "location": "CombinedStepDefinition.i_am_taken_to_the_contact_us_page()"
});
formatter.result({
  "duration": 4370300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "General enquiries",
      "offset": 52
    },
    {
      "val": "https://www.pwc.com/gx/en.html",
      "offset": 72
    }
  ],
  "location": "CombinedStepDefinition.i_am_presented_with_the_below_options_for_contacts(String,String)"
});
formatter.result({
  "duration": 124865800,
  "status": "passed"
});
formatter.match({
  "location": "CombinedStepDefinition.quit_the_browser()"
});
formatter.result({
  "duration": 743933900,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I navigate to the PwC Digital Pulse website",
  "keyword": "Given "
});
formatter.match({
  "location": "CombinedStepDefinition.initilize_the_driver_with_chrome()"
});
formatter.result({
  "duration": 10685520800,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Validate Search Page",
  "description": "",
  "id": "pwc-carousel,-contact-us-and-search;validate-search-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 29,
      "name": "@search"
    }
  ]
});
formatter.step({
  "line": 32,
  "name": "I click on the ‘Magnifying glass’ icon to perform a search",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "I enter the text ‘Single page applications’",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I submit the search",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I am taken to the search results page",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "I am presented with at least 1 search result",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "Quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "CombinedStepDefinition.i_click_on_the_magnifying_glass_icon_to_perform_a_search()"
});
formatter.result({
  "duration": 88704100,
  "status": "passed"
});
formatter.match({
  "location": "CombinedStepDefinition.i_enter_the_text_single_page_applications()"
});
formatter.result({
  "duration": 111546100,
  "status": "passed"
});
formatter.match({
  "location": "CombinedStepDefinition.i_submit_the_search()"
});
formatter.result({
  "duration": 1092578200,
  "status": "passed"
});
formatter.match({
  "location": "CombinedStepDefinition.i_am_taken_to_the_search_results_page()"
});
formatter.result({
  "duration": 5977000,
  "status": "passed"
});
formatter.match({
  "location": "CombinedStepDefinition.i_am_presented_with_at_least_1_search_result()"
});
formatter.result({
  "duration": 13514300,
  "status": "passed"
});
formatter.match({
  "location": "CombinedStepDefinition.quit_the_browser()"
});
formatter.result({
  "duration": 772434900,
  "status": "passed"
});
});