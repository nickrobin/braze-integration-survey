Survey.Survey.cssType = "bootstrap";

var surveyJSON = {pages:[{name:"First_page",elements:[{type:"text",name:"user_name",title:"Your Name: ",isRequired:true},{type:"text",name:"user_brand",title:"Company Name:",isRequired:true}]},{name:"Basic Details",elements:[{type:"checkbox",name:"platform_selector",title:"On which platforms are you planning on integrating Braze SDK?",choices:[{value:"ios_native",text:"iOS Native"},{value:"android_native",text:"Android Native"},{value:"web",text:"Web "},{value:"ios_react",text:"React iOS"},{value:"android_react",text:"React Android"},{value:"ios_cordova",text:"Cordova iOS"},{value:"android_cordova",text:"Cordova Android"},{value:"fire_os",text:"Fire OS"},{value:"tv_os",text:"tvOS "},{value:"item1",text:"Unity Android"},{value:"item2",text:"Unity iOS "},{value:"item3",text:"Xamarin Android"},{value:"item4",text:"Xamarin iOS "}],colCount:4},{type:"text",name:"question10",visibleIf:"{platform_selector} notempty",title:"Please indicate any desired go-live dates for the SDK integration:",requiredIf:"{platform_selector} notempty",inputType:"date"},{type:"checkbox",name:"channel_selector",title:"Which message channels are you planning to utilize with Braze?",choices:[{value:"mobile_push",text:"iOS/Android Push"},{value:"web_push",text:"Web Push"},{value:"in_app_messaging",text:"In-App Messaging"},{value:"in_browser_messaging",text:"In-Browser Messaging "},{value:"email",text:"Email"},{value:"webhooks",text:"Webhooks "},{value:"cards",text:"Newsfeed Cards"}],colCount:3},{type:"text",name:"question4",visibleIf:"{channel_selector} contains \"web_push\" OR {channel_selector} contains \"mobile_push\"",title:"Please indicate any desired go-live dates for push messaging:",requiredIf:"{platform_selector} notempty",inputType:"date"},{type:"text",name:"question12",visibleIf:"{channel_selector} contains \"in_app_messaging\" OR {channel_selector} contains \"in_browser_messaging\"",title:"Please indicate any desired go-live dates for in-product messaging:",requiredIf:"{platform_selector} notempty",inputType:"date"},{type:"text",name:"question11",visibleIf:"{channel_selector} contains \"email\"",title:"Please indicate any desired go-live dates for email:",requiredIf:"{platform_selector} notempty",inputType:"date"}]},{name:"Goals",elements:[{type:"comment",name:"question13",title:"Do you have any specific goals or company milestones that you are working towards? "},{type:"multipletext",name:"question17",title:"What are the base capabilities or campaigns your team needs to launch to see value?  (e.g., Ability to launch new user onboarding flows using in-app and email messaging)",items:[{name:"first_cape",title:"Item 1:"},{name:"second_cape",title:"Item 2:"},{name:"third_cape",title:"Item 3:"}]}]},{name:"CDP Details",elements:[{type:"radiogroup",name:"cdp_integration",title:"Will you be integrating Braze into your Customer Data Platform (e.g. mParticle, Segment)?",choices:[{value:"yes",text:"Yes"},{value:"no",text:"No"}]},{type:"radiogroup",name:"cdp_which",visibleIf:"{cdp_integration} = \"yes\"",title:"Cool - we love CDPs. Which one will you be using?",choices:[{value:"mparticle",text:"mParticle"},{value:"segment",text:"Segment"}]},{type:"radiogroup",name:"cdp_mparticle_integration",visibleIf:"{cdp_which} = \"mparticle\"",title:"Do you plan to use mParticle's Kit integration?",choices:[{value:"kit",text:"Yes"},{value:"server",text:"No - I'll be opting for the server to server integration and not initializing Braze's SDK (not recommended)"}]},{type:"radiogroup",name:"cdp_mparticle_audiences",visibleIf:"{cdp_which} = \"mparticle\"",title:"Do you plan to sync mParticle audiences to braze",choices:[{value:"yes",text:"Yes"},{value:"no",text:"No"}]},{type:"radiogroup",name:"cdp_segment_integration",visibleIf:"{cdp_which} = \"segment\"",title:"Do you plan to use Segment's side-by-side integration?",choices:[{value:"side_by_side",text:"Yes"},{value:"server",text:"No - I'll be opting for the server to server integration and not initializing Braze's SDK (not recommended)"}]},{type:"radiogroup",name:"cdp_segment_personas",visibleIf:"{cdp_which} = \"segment\"",title:"Do you plan to sync Segment Persona audiences to Braze?",choices:[{value:"yes",text:"Yes"},{value:"no",text:"No"}]},{type:"radiogroup",name:"cdp_segment_replay",visibleIf:"{cdp_which} = \"segment\"",title:"Do you plan to sync historical user data from Segment -> Braze (Segment's REPLAY feature) ? ",choices:[{value:"yes",text:"Yes"},{value:"no",text:"No"}]}]},{name:"iOS Details",elements:[{type:"html",name:"question2",html:"<h5> iOS details: </h5> "},{type:"radiogroup",name:"question1",title:"Which iOS dependency manager will you be using to integrate Braze?",choices:[{value:"cocoapods",text:"Cocoapods"},{value:"carthage",text:"Carthage"},{value:"manual",text:"None, I am manually integrating (not recommended) "}]},{type:"checkbox",name:"ios_advanced",visibleIf:"{platform_selector} contains \"ios_native\"",title:"Advanced Features: Please check any advanced iOS features you would like to integrate:",choices:[{value:"geofences ",text:"Geofences"},{value:"soft_push_prompt",text:"Soft Push Prompt"},{value:"rich_push",text:"Rich Push Notifications (large image in push)"},{value:"push_action_btn",text:"Push Action Buttons"},{value:"idfa_collection",text:"IDFA Collection"}]}],visibleIf:"{platform_selector} contains \"ios_native\""},{name:"Android Details",elements:[{type:"html",name:"android_details_page",html:"<h5> Android Details: </h5> "},{type:"checkbox",name:"question5",title:"Do you currently send push? If so, which provider do you use to register tokens?",choices:[{value:"item1",text:"Firebase Cloud Messenger (FCM)"},{value:"item2",text:"Google Cloud Messenger (GCM)"}]},{type:"checkbox",name:"question6",title:"Advanced Features: Please check any advanced Android features you would like to integrate:",choices:[{value:"geofences",text:"Geofences"},{value:"rich_push",text:"Rich Push Notifications (large image in push) "},{value:"push_action",text:"Push Action Buttons"}]}],visibleIf:"{platform_selector} contains \"android_native\""},{name:"Web Details",elements:[{type:"html",name:"question14",html:"<h5> Web Details: </h5>"},{type:"radiogroup",name:"web_integration_type",title:"How will you be integrating the web SDK?",choices:[{value:"standard",text:"Standard inclusion of Braze's script tag"},{value:"gtm",text:"Google Tag Manager"},{value:"requirejs",text:"RequireJS"},{value:"npm",text:"NPM "},{value:"bower",text:"Bower"}]},{type:"radiogroup",name:"web_initialization_time",title:"When will the web SDK be initialized on your site?",choices:[{value:"init_on_load",text:"Every Page (recommended)"},{value:"init_on_log_in",text:"Only upon user log in "},{value:"init_other",text:"Other "}]},{type:"comment",name:"web_initialization_time_other",visibleIf:"{web_initialization_time} = \"init_other\" or {web_initialization_time} = \"init_on_log_in\"",title:"Please describe at what point you will initialize the web SDK on your site "}],visibleIf:"{platform_selector} contains \"web\""},{name:"Migration Details",elements:[{type:"html",name:"question3",html:"<h5> Push Migration Details : </h5>"},{type:"radiogroup",name:"push_token_migration",title:"Will you be migrating push tokens over from an existing provider?",choices:[{value:"yes",text:"Yes"},{value:"no",text:"No"}]},{type:"radiogroup",name:"question7",visibleIf:"{push_token_migration} = \"yes\"",title:"Do you plan to still send push to older versions of your app that don't yet have the Braze SDK?",choices:[{value:"item1",text:"Yes"},{value:"item2",text:"No"}]}],visibleIf:"{channel_selector} contains \"web_push\" or {channel_selector} contains \"mobile_push\""},{name:"Misc II",elements:[{type:"radiogroup",name:"question9",title:"Do you plan to use our data feed export (Braze Currents) ?",choices:[{value:"item1",text:"Yes"},{value:"item2",text:"No"},{value:"item3",text:"I don't know"}]},{type:"radiogroup",name:"question8",title:"Will you be using our REST APIs for any nightly or high frequency data syncs?",choices:[{value:"item1",text:"Yes"},{value:"item2",text:"No"},{value:"item3",text:"I don't know"}]}]}],showQuestionNumbers:"off"}

function sendDataToServer(survey) {
    //send Ajax request to your web server.
    console.log(JSON.stringify(survey.data));
    request = $.ajax({
            url: "https://script.google.com/macros/s/AKfycbxBEWxWcAQQpHqNhM00eHEX_nNQh2dJliYiSgBERnF2KoW9lLLK/exec",
            type: "POST",
            crossDomain: true,
            data: survey.data,
            success: function (data) {
                console.log(data);
            },
        });

    let instructions = `${survey.data.user_name} from ${survey.data.user_brand} has completed the integration survey!`;


    //Display platforms
    if (survey.data.platform_selector)
    {
      instructions += `<br><h3> Platform Details </h3> Customer is using ${survey.data.platform_selector.toString()}`;
    }


    //Display messaging channels
    if (survey.data.channel_selector)
    {
      instructions += `<br><br><h3>Channel Details </h3> Customer is using ${survey.data.channel_selector.toString()}`;
    }



    //check if using a CDP
    if (survey.data.cdp_which)
    {
            instructions += `<br><br><h3> CDP Details </h3> Customer is using ${survey.data.cdp_which}`;

            if (survey.data.cdp_mparticle_integration === "kit")
            {
            instructions += ` Kit integration. Share this documentation: https://docs.mparticle.com/developers/sdk/android/kits/#making-direct-calls-to-kits`;
            } else if (survey.data.cdp_segment_integration === "side_by_side")
            {
            instructions += ` Side By Side integration. Share this documentation: https://segment.com/docs/destinations/braze/ `;
            }
    }




    if (survey.data.platform_selector.includes("ios_native") && survey.data.channel_selector.includes("mobile_push") && survey.data.cdp_which.includes("mparticle"))
    {
      instructions += `<br><br><h3> Push Specific Set Up </h3> mParticle iOS Push configu: https://www.braze.com/docs/developer_guide/platform_integration_guides/android/initial_sdk_setup/android_sdk_integration/`;
    }








    // SEND THE RESULTS VIA EMAIL


    instructions += `<br><br><br><br><a href="https://docs.google.com/spreadsheets/d/1kbGVdg-1nc49Ixf6ZsNn5I6WKTqf1-WBySJnUT9PjY8/edit#gid=0"> View Full Results </a>`
    console.log(instructions);

      var settings = {
          "async": true,
          "crossDomain": true,
          "url": "https://sondheim.braze.com/messages/send",
          "method": "POST",
          "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
          },
          "processData": false,
           "data": `{\n  \"api_key\": \"575f13ed-4e7d-4929-a475-43b45f8f72cf\",\n  \"external_user_ids\" : [\"nickrobin\"],\n  \"messages\": {\n     \"email\": {\n     \"app_id\" : \"349cf2a9-fc66-4dc0-abc2-18f7fae0626d\",\n     \"subject\":\"Integration Survey Completed for ${survey.data.user_brand}\",\n     \"from\": \"integration-survey@updates.braze.com\",\n     \"body\" : ${JSON.stringify(instructions)}\n     }\n   }\n}`
        }

  $.ajax(settings).done(function (response) {
    console.log(response);
  });






}



var survey = new Survey.Model(surveyJSON);
$("#surveyContainer").Survey({
    model: survey,
    onComplete: sendDataToServer
});

survey.clearInvisibleValues = "onHidden"; survey.render();
