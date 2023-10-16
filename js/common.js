(function () {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init('pVga9FTrVle7hw-Gz');
})();

window.onload = function () {
    if (document.getElementById('contact-form')) {
        document.getElementById('contact-form').addEventListener('submit', function (event) {
            event.preventDefault();
            // these IDs from the previous steps
            emailjs.sendForm('gmail', 'gmailtest', this)
                .then(function () {
                    $('#sendMailOk').css({ "visibility": "visible", });
                    $('#contact-form').find("textarea, input").val("").end().find(":checked").prop("checked", false);
                }, function (error) {
                    alert('send fail！')
                });
        });
    }

    $('#closeMessage').on("click", function () {
        $("#sendMailOk").css({
            "visibility": "hidden",
        });
    });
    $('a').click(function () {
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
        return false;
    });
    // HERENCIAX
    var elements1 = document.querySelectorAll('[data-s-ac8dd833-1e9c-446c-8254-882b8dcb7590]');
    var elements1_font1 = document.querySelectorAll('[data-s-3e6bbb7d-a762-4969-ad96-7de938adb64d]');
    var elements1_font2 = document.querySelectorAll('[data-s-b3fe4c86-e45c-4011-81ce-1776dfb1abde]');
    var elements1_font3 = document.querySelectorAll('[data-s-6358f866-8d29-439c-81d0-d7ccfec1730f]');
    var elements1_font4 = document.querySelectorAll('[data-s-be8e0c33-feef-4fbe-8373-ce4d73928b29]');
    // Residential
    var elements2_once_flag = false;
    var elements2 = document.querySelectorAll('[data-s-521aed6b-f9f5-4e09-ac71-b3974f28207b]');
    var elements2_font1 = document.querySelectorAll('[data-s-96ded477-d305-46f5-b5ea-8e061d0a816f]');
    var elements2_font2 = document.querySelectorAll('[data-s-6a2e7206-3e6b-4d8e-b6e1-a49fdb838a45]');
    var elements2_img1 = document.querySelectorAll('[data-s-f00a161d-8127-4375-bc99-93f89cc94e13]');
    var elements2_article1 = document.querySelectorAll('[data-s-4d71ab96-524e-4644-a78c-9ad55f0c7ea7]');
    var elements2_font3 = document.querySelectorAll('[data-s-b753cf30-37bc-4745-b2a4-887e05342853]');
    var elements2_font4 = document.querySelectorAll('[data-s-b5490298-3f8b-4593-b0d5-355c2a2949a5]');
    var elements2_font5 = document.querySelectorAll('[data-s-239d756f-fa92-4ecc-92aa-64380f5c14b7]');
    var elements2_font6 = document.querySelectorAll('[data-s-6b590abc-1b75-4c4c-a2c5-076b8c76143a]');
    // Commercial
    var elements3_once_flag = false;
    var elements3 = document.querySelectorAll('[data-s-03df60f1-2cde-4c4c-99c1-fe3a67b603d1]');
    var elements3_font1 = document.querySelectorAll('[data-s-1d22d7d5-8fbe-4310-b3a2-fb71eb77f458]');
    var elements3_font2 = document.querySelectorAll('[data-s-1d61567f-3618-41eb-b922-4f21f9075274]');
    var elements3_img1 = document.querySelectorAll('[data-s-c1dcd5fe-1de8-439d-b94c-083bbeb6590c]');
    var elements3_article1 = document.querySelectorAll('[data-s-4ee62373-20c4-474a-9145-e9f30f9ce426]');
    var elements3_font3 = document.querySelectorAll('[data-s-c738678a-bb95-4e41-8b7d-d464029d461e]');
    var elements3_font4 = document.querySelectorAll('[data-s-16ca008f-676a-4164-905b-a1e1148c7e4d]');
    var elements3_font5 = document.querySelectorAll('[data-s-812cf84b-2e96-48ae-b17c-69b93c360bd5]');
    // Our Properties
    var elements4_once_flag = false;
    var elements4 = document.querySelectorAll('[data-s-e45d0071-d846-4c1f-8c89-5ba26c8b81ad]');
    var elements4_font1 = document.querySelectorAll('[data-s-d2fcc20e-c6d8-474a-a598-821765167b65]');
    var elements4_font2 = document.querySelectorAll('[data-s-bde41ff9-f39f-47bb-8f52-fa5bf5ca9620]');
    var elements4_img1 = document.querySelectorAll('[data-s-ba5d9675-94f9-419c-8b86-d13691dc2b42]');
    var elements4_article1 = document.querySelectorAll('[data-s-26ecc6e5-f369-4772-92c8-35a7d0c15ee7]');
    var elements4_font3 = document.querySelectorAll('[data-s-2afc9f63-725c-468d-b83b-1190f26e06c0]');
    var elements4_font4 = document.querySelectorAll('[data-s-cd852be7-473b-4d14-9537-ad386e52d87b]');
    var elements4_font5 = document.querySelectorAll('[data-s-a6607fe9-edee-4a11-a6ee-f3c23d515536]');
    // News
    var elements5_once_flag = false;
    var elements5 = document.querySelectorAll('[data-s-90dbd1c2-a637-4bdd-bbe7-9bc2c08db563]');
    var elements5_font1 = document.querySelectorAll('[data-s-4a70bac7-0269-4845-9c97-661da21ad01c]');
    var elements5_font2 = document.querySelectorAll('[data-s-449dd60d-af61-4f99-8d4a-8a8cf898ab37]');
    var elements5_article1 = document.querySelectorAll('[data-s-5d138990-93bb-41c6-9ef4-7bfb05bcf442]');
    var elements5_article2 = document.querySelectorAll('[data-s-3da8781a-d229-4394-8145-1b050265dda7]');
    var elements5_article3 = document.querySelectorAll('[data-s-8b2ba15d-89b8-4b9d-a4dc-e5eff1e48e56]');
    // Company
    var elements7_once_flag = false;
    var elements7 = document.querySelectorAll('[data-s-54f27c20-98da-412f-8101-cd9ccfd1dd26]');
    var elements7_font1 = document.querySelectorAll('[data-s-cc1efe17-7b48-42fe-bd36-d9379948c126]');
    var elements7_font2 = document.querySelectorAll('[data-s-99c4b81d-c42a-4519-ae26-5777a720ae7b]');
    var elements7_font3 = document.querySelectorAll('[data-s-4b8b7d20-892e-48a1-bc64-f6441de7f5de]');
    var elements7_map = document.querySelectorAll('[data-s-218fdddf-ed8f-4370-8673-8f4a0c9008fa]');
    // Contact
    var elements9_once_flag = false;
    var elements9 = document.querySelectorAll('[data-s-9323ae2a-ba5a-48b7-bc2a-36726503a21e]');
    var elements9_font1 = document.querySelectorAll('[data-s-97339f01-9b4b-4267-913e-cebc0ed04433]');
    var elements9_font2 = document.querySelectorAll('[data-s-e9f4fe58-1cde-4c77-8d3b-b0d31b771058]');
    var elements9_font3 = document.querySelectorAll('[data-s-79395c85-11d8-4cfd-9610-78c1b721264f]');
    var elements9_font4 = document.querySelectorAll('[data-s-39ee7181-62f2-4ccd-9d07-04a0c46081fe]');
    var elements9_form = document.querySelectorAll('[data-s-c5f80785-1a7a-427f-a0b7-0efb283bafb7]');
    // Privacy policy
    var elements10 = document.querySelectorAll('[data-s-2956e4a4-1b0a-4c76-97ab-cf84c24477ab]');
    var elements10_font1 = document.querySelectorAll('[data-s-22dfc35d-2c11-49ed-b3c8-32c62dc0009a]');
    var elements10_font2 = document.querySelectorAll('[data-s-778e6c8c-14db-409e-98b0-e14dbc1e9030]');
    var elements10_nav = document.querySelectorAll('[data-s-ef6b2a63-e7d1-4746-8ee8-96c31c239c76]');
    // ラ・プロヴァンサル
    var elements11 = document.querySelectorAll('[data-s-f685452b-f13a-4343-8557-424c1619697e]');
    var elements11_font1 = document.querySelectorAll('[data-s-ec5e95f8-3ca8-494d-90cc-dd1ea8f6c83b]');
    var elements11_font2 = document.querySelectorAll('[data-s-122a09f8-dc75-423e-8fc4-d09375f59449]');
    var elements11_nav = document.querySelectorAll('[data-s-87a73f82-57cb-4c92-8dd4-4018c4bb0f25]');
    // MENU
    var elements12 = document.querySelectorAll('[data-s-d809900f-ad3e-40f8-8cce-b6875bcdd557]');
    // About
    var elements13_once_flag = false;
    var elements13 = document.querySelectorAll('[data-s-9acada63-cb9f-4a60-bb91-cfbf23482717]');
    var elements13_font1 = document.querySelectorAll('[data-s-1795aaaf-846b-41a6-a1bb-2fb84850c30b]');
    var elements13_font2 = document.querySelectorAll('[data-s-f5d97f52-567f-4fca-874f-380d551ba30f]');
    // Gallery
    var elements14_once_flag = false;
    var elements14 = document.querySelectorAll('[data-s-642b7efd-750b-4327-91c8-345d30c4b2ae]');
    var elements14_article1 = document.querySelectorAll('[data-s-b06f24f7-e598-4b12-93df-eac0e4302049]');
    var elements14_font1 = document.querySelectorAll('[data-s-4f596501-61ef-443b-9808-03d90d731735]');
    var elements14_font2 = document.querySelectorAll('[data-s-2f2658bd-b8fe-46e0-bd46-32812e4c3595]');
    var elements14_font3 = document.querySelectorAll('[data-s-aabd03d4-9ff3-4223-a980-494f6422f61e]');
    var elements14_font4 = document.querySelectorAll('[data-s-2e071092-ca57-4a20-8044-0abbd2acb0bc]');
    var elements14_font5 = document.querySelectorAll('[data-s-3cce6032-02d2-4bfd-8411-9b6b74a814bc]');
    // Detail
    var elements15_once_flag = false;
    var elements15 = document.querySelectorAll('[data-s-f21eaeff-d9b5-4996-9498-b914d5d41f0e]');
    var elements15_font1 = document.querySelectorAll('[data-s-724f6905-49a9-402d-89a1-9a12d5067688]');
    var elements15_font2 = document.querySelectorAll('[data-s-dbd139b0-698e-4532-a57d-3b7c5ddab8ab]');
    var elements15_font3 = document.querySelectorAll('[data-s-0be36486-e449-4cbf-aa83-7a10790f2f4e]');
    // Features
    var elements16_once_flag = false;
    var elements16 = document.querySelectorAll('[data-s-cb6b37e5-c031-458b-b34d-af3ab53fdadb]');
    var elements16_font1 = document.querySelectorAll('[data-s-397095c8-6d07-4f48-a4ab-a927cb01e357]');
    var elements16_font2 = document.querySelectorAll('[data-s-04263230-cf69-45d9-8405-fbf28160f66e]');
    // Access
    var elements17_once_flag = false;
    var elements17 = document.querySelectorAll('[data-s-87d05eaa-9ee7-46cf-a092-3475e5fea519]');
    var elements17_font1 = document.querySelectorAll('[data-s-7aa0384c-dc92-4e35-9b86-336e003ccad6]');
    // CONTACT
    var elements18_once_flag = false;
    var elements18 = document.querySelectorAll('[data-s-6924c827-fa61-408c-b051-10df86f041ec]');
    var elements18_font1 = document.querySelectorAll('[data-s-1cf0ab25-e069-491f-beee-6868024062b4]');
    var elements18_font2 = document.querySelectorAll('[data-s-953c0e2e-5637-4f3f-98e0-6ba469879d74]');
    var elements18_font3 = document.querySelectorAll('[data-s-969631a0-8632-4c60-be72-796d8f4b7cfc]');
    var elements18_font4 = document.querySelectorAll('[data-s-b0236cfa-6e9e-4fc3-8e87-0447f71225bb]');
    var elements18_form = document.querySelectorAll('[data-s-cd731c94-435a-4516-a0c4-f2cf619529e2]');
    // OUR
    var elements19 = document.querySelectorAll('[data-s-f59d37f7-5e7c-46b3-9a5d-7b113982c4ff]');
    var elements19_font1 = document.querySelectorAll('[data-s-c72afe67-5182-42a8-9594-0ac325963248]');
    var elements19_font2 = document.querySelectorAll('[data-s-05d20467-eac5-460e-b34f-ef21f35bbc2f]');
    var elements19_font3 = document.querySelectorAll('[data-s-98bf50dd-433a-4126-9965-e00d4de61234]');
    // MENU
    var elements20 = document.querySelectorAll('[data-s-ddedcd3d-af0e-4aa5-881f-429f888bcb4b]');
    // Veelkleurig<br>Akihabara
    var elements21_once_flag = false;
    var elements21 = document.querySelectorAll('[data-s-9449f239-ae1c-4e0e-9be8-f274aa4163ce]');
    var elements21_font1 = document.querySelectorAll('[data-s-41e8466f-769d-44b6-bfe7-836cf6a8f9bc]');
    var elements21_font2 = document.querySelectorAll('[data-s-f1e27091-7280-47c7-99b8-e497d981b07f]');
    var elements21_font3 = document.querySelectorAll('[data-s-a7b6aa52-bc05-4a99-8f1b-4fd95e0907f7]');
    var elements21_font4 = document.querySelectorAll('[data-s-ecf17d5e-be61-4c0a-b214-4ca9c9fbfe37]');
    var elements21_font5 = document.querySelectorAll('[data-s-77e12752-3e5d-4d14-b405-049646e52b53]');
    var elements21_font6 = document.querySelectorAll('[data-s-bef7603b-db10-4ded-963c-6d9ca599a25b]');
    var elements21_font7 = document.querySelectorAll('[data-s-109642cc-9522-4bfd-aa84-f63be13a023e]');
    var elements21_font8 = document.querySelectorAll('[data-s-43429ddd-5845-49fd-b534-29af963612a1]');
    var elements21_font9 = document.querySelectorAll('[data-s-260cddd4-d8bb-43f0-8850-fc3d3d6c84ff]');
    var elements21_font10 = document.querySelectorAll('[data-s-79ec8d35-be0e-468f-8c6e-696e06c2e63a]');
    var elements21_font11 = document.querySelectorAll('[data-s-3aafc9c8-a162-4bd5-babd-fa18a6ac9215]');
    // Catherina<br>Bunnkyo<br>Yushima
    var elements22_once_flag = false;
    var elements22 = document.querySelectorAll('[data-s-27ce7ad2-ede8-4621-9d5c-f23afbe846f9]');
    var elements22_font1 = document.querySelectorAll('[data-s-342ae82a-4aab-49b8-beb6-27a2989055fb]');
    var elements22_font2 = document.querySelectorAll('[data-s-9f8b7591-0db1-4a80-adf1-b6615b76096c]');
    var elements22_font3 = document.querySelectorAll('[data-s-e8cdbc5d-2bec-47ef-ad38-ea485aaa086c]');
    var elements22_font4 = document.querySelectorAll('[data-s-2c43cd5c-b804-4f50-9ba7-b25ffd00369a]');
    var elements22_font5 = document.querySelectorAll('[data-s-19a3da31-bdf6-4104-b5fa-337392d956ed]');
    var elements22_font6 = document.querySelectorAll('[data-s-21df67a1-78e8-4391-95e2-a988c29d0387]');
    var elements22_font7 = document.querySelectorAll('[data-s-c524acc5-dd3f-42a5-8b2f-fcfed764587e]');
    var elements22_font8 = document.querySelectorAll('[data-s-43ddef6d-42eb-4bde-a3ef-4ced4d39e0c5]');
    var elements22_font9 = document.querySelectorAll('[data-s-9d72e528-d68b-4355-8473-c86fadb75d02]');
    var elements22_font10 = document.querySelectorAll('[data-s-65800b86-2a1e-4d34-bdef-1c166ef2a40e]');
    var elements22_font11 = document.querySelectorAll('[data-s-0126f641-c06b-4bdd-87fb-b79847c4b516]');
    // Shuwa&nbsp;<br>Tameike sannno<br>Residence
    var elements23_once_flag = false;
    var elements23 = document.querySelectorAll('[data-s-dc37f7d0-a80b-46cc-9fdb-72dbf3478b5e]');
    var elements23_font1 = document.querySelectorAll('[data-s-e5ec2f7a-1afc-4c12-978b-59671ab1fa09]');
    var elements23_font2 = document.querySelectorAll('[data-s-3a658198-a679-4fe9-8def-252b3d2b70d2]');
    var elements23_font3 = document.querySelectorAll('[data-s-d6b6e3e7-12d1-4d85-8ce7-10de7be724de]');
    var elements23_font4 = document.querySelectorAll('[data-s-19d100c8-9633-41de-a92d-0275c619739d]');
    var elements23_font5 = document.querySelectorAll('[data-s-8da05663-d01a-41ba-9490-f61d266d04d0]');
    var elements23_font6 = document.querySelectorAll('[data-s-90eae26a-bcf9-4d18-adac-06ad50f9101c]');
    var elements23_font7 = document.querySelectorAll('[data-s-4de1598a-f8b6-4af2-a938-1a0c7da4ab3b]');
    var elements23_font8 = document.querySelectorAll('[data-s-ce01bdfe-618d-4063-873f-8205d2d35dec]');
    var elements23_font9 = document.querySelectorAll('[data-s-29bf18a6-2493-4922-a77c-b2a106bf990b]');
    var elements23_font10 = document.querySelectorAll('[data-s-386a68ac-40b1-43d9-98c7-66ef871ae876]');
    var elements23_font11 = document.querySelectorAll('[data-s-988b7747-384a-47a1-bbf2-071c9b1c50b3]');
    // Bellegend<br>Bunkyo sendagi<br>Grace
    var elements24_once_flag = false;
    var elements24 = document.querySelectorAll('[data-s-d78c17ef-97e1-4beb-bdfd-e0675fce190f]');
    var elements24_font1 = document.querySelectorAll('[data-s-69f28801-905b-4b39-9f33-b3679f1cc524]');
    var elements24_font2 = document.querySelectorAll('[data-s-eebbcc1f-f00d-4335-ab04-cf4d61174e05]');
    var elements24_font3 = document.querySelectorAll('[data-s-9d818a46-72fe-4a7f-a0e2-85e140d811fc]');
    var elements24_font4 = document.querySelectorAll('[data-s-0b1288cd-c926-44d2-90ef-2bc9c29c0a35]');
    var elements24_font5 = document.querySelectorAll('[data-s-b7b18f18-86e8-45b0-a3bd-069a395b1a7b]');
    var elements24_font6 = document.querySelectorAll('[data-s-c5fe9f9e-d2ae-47e2-a017-352c7e755518]');
    var elements24_font7 = document.querySelectorAll('[data-s-5f4cf911-2865-4458-9dee-23762b419ccb]');
    var elements24_font8 = document.querySelectorAll('[data-s-29fdcf74-f91b-42d5-98d9-c09b139d735f]');
    var elements24_font9 = document.querySelectorAll('[data-s-c945a1b0-1c15-4b4f-97e0-cf17f756e088]');
    var elements24_font10 = document.querySelectorAll('[data-s-fa6926ad-7793-4399-b476-aa93cb24b9a7]');
    var elements24_font11 = document.querySelectorAll('[data-s-22eff06b-653c-498b-8d42-f854a9e3a210]');
    var elements24_font12 = document.querySelectorAll('[data-s-419269ea-394d-4ce3-9ee7-ab357d3cc774]');
    // CONTACT
    var elements25_once_flag = false;
    var elements25 = document.querySelectorAll('[data-s-f3a9134d-b708-45a1-87de-9f3e35cb0e08]');
    var elements25_font1 = document.querySelectorAll('[data-s-87582897-fe74-420c-8573-3935accdf530]');
    var elements25_font2 = document.querySelectorAll('[data-s-1bf152f9-9089-45e7-a8b2-0d44c16d706a]');
    var elements25_font3 = document.querySelectorAll('[data-s-d8d2bd49-704f-4cf3-ab9d-9219bbfa7587]');
    var elements25_font4 = document.querySelectorAll('[data-s-42e41851-f001-493f-b03e-e4ec44a0a3bf]');
    var elements25_form = document.querySelectorAll('[data-s-68e9c445-9f54-47bf-afb5-64e5cab56908]');
    // フェリスコート
    var elements26 = document.querySelectorAll('[data-s-54595301-1cf7-48ec-9948-4701f5a81f09]');
    var elements26_font1 = document.querySelectorAll('[data-s-b5edbc11-bddd-4e1d-9e24-ae4a3dbefc37]');
    var elements26_font2 = document.querySelectorAll('[data-s-11ce717c-6a72-4518-b8ab-e26d89c8382d]');
    var elements26_font3 = document.querySelectorAll('[data-s-f5520edb-822c-415d-9d11-fed196e4791e]');
    // MENU
    var elements27 = document.querySelectorAll('[data-s-637088a4-2550-41ca-92bd-c42ca119b083]');
    // About
    var elements28_once_flag = false;
    var elements28 = document.querySelectorAll('[data-s-d2f50877-cd8f-43f6-aef9-fdd9f7e840cc]');
    var elements28_font1 = document.querySelectorAll('[data-s-b1510bfa-27ce-4fd9-aca3-ac99897108e1]');
    var elements28_font2 = document.querySelectorAll('[data-s-82c662fe-222c-47da-a455-8379f144eb66]');
    // Gallery
    var elements29_once_flag = false;
    var elements29 = document.querySelectorAll('[data-s-30cbb8a3-256b-4a30-800e-4f273ee6bc1b]');
    var elements29_article1 = document.querySelectorAll('[data-s-5fd26af3-25bf-48ef-a43c-9b2237d2c47e]');
    var elements29_font1 = document.querySelectorAll('[data-s-16ce727b-aa36-44ea-82f7-6cc7bb35b05e]');
    var elements29_font2 = document.querySelectorAll('[data-s-2b020807-5547-47bc-abd5-c0051a4bc0c2]');
    var elements29_font3 = document.querySelectorAll('[data-s-f567a000-10bc-4198-93ff-acf269808d94]');
    var elements29_font4 = document.querySelectorAll('[data-s-b32b8fa2-f886-4cf5-940f-af4a0a6755d2]');
    var elements29_font5 = document.querySelectorAll('[data-s-fa764652-c856-4b4b-9c84-2c4bd8d8dbfd]');
    // Detail
    var elements30_once_flag = false;
    var elements30 = document.querySelectorAll('[data-s-338ed80d-0a47-4d6a-87f0-4b6480072fe5]');
    var elements30_font1 = document.querySelectorAll('[data-s-1a8ce8e5-4e3f-43f7-a12d-eafddda2f709]');
    var elements30_font2 = document.querySelectorAll('[data-s-5c6dd4a8-7305-4214-8873-8da99ead7569]');
    var elements30_font3 = document.querySelectorAll('[data-s-beae6069-53a3-46b4-9e0e-f1b96218fdc5]');
    // Features
    var elements31_once_flag = false;
    var elements31 = document.querySelectorAll('[data-s-48fc3c90-c033-4f5c-8f77-56ce21b1ccb2]');
    var elements31_font1 = document.querySelectorAll('[data-s-4277262a-56c2-4a0f-8b13-13e8c867df22]');
    var elements31_font2 = document.querySelectorAll('[data-s-5f43741f-aefa-4ab1-9332-03f8c1498481]');
    // Access
    var elements32_once_flag = false;
    var elements32 = document.querySelectorAll('[data-s-f4256a05-273e-4692-842a-4859fe9ce8fa]');
    var elements32_font1 = document.querySelectorAll('[data-s-563a6c69-4e08-4931-a320-4325e9b76a9c]');
    // CONTACT
    var elements33_once_flag = false;
    var elements33 = document.querySelectorAll('[data-s-1303b465-f59e-45fe-9f83-eed8f5ede287]');
    var elements33_font1 = document.querySelectorAll('[data-s-a1db611e-f8ab-4125-b064-7432f1bf4e71]');
    var elements33_font2 = document.querySelectorAll('[data-s-363af11c-111c-470a-97da-1feaf8a06e4d]');
    var elements33_font3 = document.querySelectorAll('[data-s-fc9dab67-7f3b-4c2b-a0ad-5dfbdf129a11]');
    var elements33_font4 = document.querySelectorAll('[data-s-b21f6ce8-98fb-438d-8d55-baeef3d3b01f]');
    var elements33_form = document.querySelectorAll('[data-s-b6e301f1-eeb7-49a7-9e55-144a2ca0822c]');
    // サンテシアビル
    var elements34 = document.querySelectorAll('[data-s-002946ca-9c95-4c57-8c11-0786fe0a40d1]');
    var elements34_font1 = document.querySelectorAll('[data-s-d696033d-9f84-4320-90c2-7af6333a366a]');
    var elements34_font2 = document.querySelectorAll('[data-s-9056abd8-bfff-49a9-9af7-2210f142745f]');
    var elements34_font3 = document.querySelectorAll('[data-s-76626da6-96ff-4492-9fd8-60b9afc89678]');
    // MENU
    var elements35 = document.querySelectorAll('[data-s-a12efc66-0ab7-4e45-bd34-987631e87e00]');
    // About
    var elements36_once_flag = false;
    var elements36 = document.querySelectorAll('[data-s-cf1282bd-083e-49bd-8181-61e0755ed5b9]');
    var elements36_font1 = document.querySelectorAll('[data-s-d79e7cd0-8b98-48bc-abc9-703b1b936b14]');
    var elements36_font2 = document.querySelectorAll('[data-s-94403d86-7d08-4b85-ae3d-6e358f66d9b4]');
    // Gallery
    var elements37_once_flag = false;
    var elements37 = document.querySelectorAll('[data-s-46808261-626a-40c3-98fd-6d688204ceae]');
    var elements37_article1 = document.querySelectorAll('[data-s-ccc58ddc-dfc6-4835-a738-0e390a1cd2c5]');
    var elements37_font1 = document.querySelectorAll('[data-s-9c60d0fe-961a-4499-ae3c-4aca5d3b6a2f]');
    var elements37_font2 = document.querySelectorAll('[data-s-494b2f2a-a9a3-460d-a6cf-e7951579fe50]');
    var elements37_font3 = document.querySelectorAll('[data-s-ca664e99-9769-43ec-8ad8-13f4ed30d88f]');
    var elements37_font4 = document.querySelectorAll('[data-s-b0b43d34-939f-4e07-b085-75bedb14b6e6]');
    var elements37_font5 = document.querySelectorAll('[data-s-dec98f8c-8391-431f-b304-2b92fd084924]');
    var elements37_font6 = document.querySelectorAll('[data-s-011c8357-d177-4a62-a3d8-5554a98ce7c3]');
    var elements37_font7 = document.querySelectorAll('[data-s-9ce623f0-5bc0-4b69-97d3-11bc365502d5]');
    var elements37_font8 = document.querySelectorAll('[data-s-f87bc2c8-f61c-42fb-a329-3b171cad7805]');
    var elements37_font9 = document.querySelectorAll('[data-s-bbde0ca8-1f8f-44cf-967a-eb29a649c7d7]');
    var elements37_font10 = document.querySelectorAll('[data-s-5777100c-4b9e-4b73-ad25-b639bd5cb4aa]');
    var elements37_font11 = document.querySelectorAll('[data-s-daeb4761-cdcd-4a0c-a407-0339124cc90f]');
    var elements37_font12 = document.querySelectorAll('[data-s-f637c806-9be9-4114-b508-d6838ecbc319]');
    var elements37_font13 = document.querySelectorAll('[data-s-ebad1c5b-7418-462e-aad4-e02f79b8be09]');
    var elements37_font14 = document.querySelectorAll('[data-s-2c038a72-ab86-45f5-a3a5-6260d5faeb8d]');
    var elements37_font15 = document.querySelectorAll('[data-s-1b04917e-629f-420e-8f10-af91e1f33441]');
    var elements37_font16 = document.querySelectorAll('[data-s-9090f352-02d2-4789-a388-0977589263e6]');
    var elements37_font17 = document.querySelectorAll('[data-s-01d38764-657e-4545-8d0c-c703c210e88c]');
    // Detail
    var elements38_once_flag = false;
    var elements38 = document.querySelectorAll('[data-s-6f6610b0-479f-4ed3-9db0-a66d8761d784]');
    var elements38_font1 = document.querySelectorAll('[data-s-0f90d127-90ca-48cd-90b6-4df5e6116674]');
    var elements38_font2 = document.querySelectorAll('[data-s-47e7ea06-c3b5-4a8a-a981-2e1db316b5ce]');
    var elements38_font3 = document.querySelectorAll('[data-s-ccc96ca7-3e0e-434d-a3a9-99b34db6e45a]');
    // Access
    var elements39_once_flag = false;
    var elements39 = document.querySelectorAll('[data-s-731e1999-0bf8-47f3-92f7-db3f6e6a60d6]');
    var elements39_font1 = document.querySelectorAll('[data-s-bf62ad74-881c-405e-aa2f-9da5fb449f79]');
    // Contact
    var elements40_once_flag = false;
    var elements40 = document.querySelectorAll('[data-s-ae2adbb0-275d-4bda-a5c5-70e3c9b548c7]');
    var elements40_font1 = document.querySelectorAll('[data-s-a4825c3d-f00c-42b4-bd36-9158af982ecc]');
    var elements40_font2 = document.querySelectorAll('[data-s-0452c8e2-7775-4540-89d8-92dab1ffaedb]');
    var elements40_font3 = document.querySelectorAll('[data-s-b97f46f3-d7f2-4768-ad01-2283f85d56ff]');
    var elements40_font4 = document.querySelectorAll('[data-s-4efd2ca1-df31-4403-b554-ef237541bb85]');
    var elements40_form = document.querySelectorAll('[data-s-5f38147d-a12e-4fdf-bbfa-8461f039d444]');

    if (elements12.length > 0) {
        elements12[0].style.visibility = "visible"
        elements12[0].style.animationName = "fade-in-f3fb3dc8"; // 设置动画名称
        elements12[0].style.animationDuration = "3.5s"; // 设置动画持续时间
        elements12[0].style.animationIterationCount = "1"; // 设置动画重复次数
    }
    if (elements20.length > 0) {
        elements20[0].style.visibility = "visible"
        elements20[0].style.animationName = "fade-in-f3fb3dc8"; // 设置动画名称
        elements20[0].style.animationDuration = "3.5s"; // 设置动画持续时间
        elements20[0].style.animationIterationCount = "1"; // 设置动画重复次数
    }
    if (elements27.length > 0) {
        elements27[0].style.visibility = "visible"
        elements27[0].style.animationName = "fade-in-f3fb3dc8"; // 设置动画名称
        elements27[0].style.animationDuration = "3.5s"; // 设置动画持续时间
        elements27[0].style.animationIterationCount = "1"; // 设置动画重复次数
    }
    if (elements35.length > 0) {
        elements35[0].style.visibility = "visible"
        elements35[0].style.animationName = "fade-in-f3fb3dc8"; // 设置动画名称
        elements35[0].style.animationDuration = "3.5s"; // 设置动画持续时间
        elements35[0].style.animationIterationCount = "1"; // 设置动画重复次数
    }
    setTimeout(() => {
        window.scrollTo(0, 0);
        if (elements1.length > 0) {
            const elements1Rect = elements1[0].getBoundingClientRect();
            // 触发动画的条件，可以根据需要进行调整
            if (elements1Rect.top < window.innerHeight) {
                // 添加动画效果
                // 添加.appear类来启动动画
                elements1_font1[0].classList.add('appear');
                elements1_font2[0].classList.add('appear');
                elements1_font3[0].classList.add('appear');
                elements1_font4[0].classList.add('appear');
                // 使用setTimeout或者其他逻辑来移除.appear类和添加.appear-active类，以触发进一步的动画效果
                setTimeout(() => {
                    elements1[0].style.visibility = "visible"
                    elements1_font1[0].classList.remove('appear');
                    elements1_font1[0].classList.add('appear-active');
                    elements1_font2[0].classList.remove('appear');
                    elements1_font2[0].classList.add('appear-active');
                    elements1_font3[0].classList.remove('appear');
                    elements1_font3[0].classList.add('appear-active');
                    elements1_font4[0].classList.remove('appear');
                    elements1_font4[0].classList.add('appear-active');
                }, 2000); // 根据CSS中的transition-delay来设置适当的时间
            }
        }
        if (elements10.length > 0) {
            const elements10Rect = elements10[0].getBoundingClientRect();
            // 触发动画的条件，可以根据需要进行调整
            if (elements10Rect.top < window.innerHeight) {
                // 添加动画效果
                // 添加.appear类来启动动画
                elements10_font1[0].classList.add('appear');
                elements10_font2[0].classList.add('appear');
                elements10_nav[0].classList.add('appear');
                // 使用setTimeout或者其他逻辑来移除.appear类和添加.appear-active类，以触发进一步的动画效果
                setTimeout(() => {
                    elements10[0].style.visibility = "visible"
                    elements10_font1[0].classList.remove('appear');
                    elements10_font2[0].classList.remove('appear');
                    elements10_nav[0].classList.remove('appear');
                    elements10_font1[0].classList.add('appear-active');
                    elements10_font2[0].classList.add('appear-active');
                    elements10_nav[0].classList.add('appear-active');
                }, 900); // 根据CSS中的transition-delay来设置适当的时间
            }
        }
        if (elements11.length > 0) {
            const elements11Rect = elements11[0].getBoundingClientRect();
            // 触发动画的条件，可以根据需要进行调整
            if (elements11Rect.top < window.innerHeight) {
                // 添加动画效果
                // 添加.appear类来启动动画
                elements11_font1[0].classList.add('appear');
                elements11_font2[0].classList.add('appear');
                elements11_nav[0].classList.add('appear');
                // 使用setTimeout或者其他逻辑来移除.appear类和添加.appear-active类，以触发进一步的动画效果
                setTimeout(() => {
                    elements11[0].style.visibility = "visible"
                    elements11_font1[0].classList.remove('appear');
                    elements11_font2[0].classList.remove('appear');
                    elements11_nav[0].classList.remove('appear');
                    elements11_font1[0].classList.add('appear-active');
                    elements11_font2[0].classList.add('appear-active');
                    elements11_nav[0].classList.add('appear-active');
                }, 900); // 根据CSS中的transition-delay来设置适当的时间
            }
        }
        if (elements19.length > 0) {
            const elements19Rect = elements19[0].getBoundingClientRect();
            // 触发动画的条件，可以根据需要进行调整
            if (elements19Rect.top < window.innerHeight) {
                // 添加动画效果
                // 添加.appear类来启动动画
                elements19_font1[0].classList.add('appear');
                elements19_font2[0].classList.add('appear');
                // 使用setTimeout或者其他逻辑来移除.appear类和添加.appear-active类，以触发进一步的动画效果
                setTimeout(() => {
                    elements19[0].style.visibility = "visible"
                    elements19_font1[0].classList.remove('appear');
                    elements19_font2[0].classList.remove('appear');
                    elements19_font1[0].classList.add('appear-active');
                    elements19_font2[0].classList.add('appear-active');
                }, 900); // 根据CSS中的transition-delay来设置适当的时间
            }
        }
        if (elements26.length > 0) {
            const elements26Rect = elements26[0].getBoundingClientRect();
            // 触发动画的条件，可以根据需要进行调整
            if (elements26Rect.top < window.innerHeight) {
                // 添加动画效果
                // 添加.appear类来启动动画
                elements26_font1[0].classList.add('appear');
                elements26_font2[0].classList.add('appear');
                elements26_font3[0].classList.add('appear');
                // 使用setTimeout或者其他逻辑来移除.appear类和添加.appear-active类，以触发进一步的动画效果
                setTimeout(() => {
                    elements26[0].style.visibility = "visible"
                    elements26_font1[0].classList.remove('appear');
                    elements26_font2[0].classList.remove('appear');
                    elements26_font3[0].classList.remove('appear');
                    elements26_font1[0].classList.add('appear-active');
                    elements26_font2[0].classList.add('appear-active');
                    elements26_font3[0].classList.add('appear-active');
                }, 900); // 根据CSS中的transition-delay来设置适当的时间
            }
        }
        if (elements34.length > 0) {
            const elements34Rect = elements34[0].getBoundingClientRect();
            // 触发动画的条件，可以根据需要进行调整
            if (elements34Rect.top < window.innerHeight) {
                // 添加动画效果
                // 添加.appear类来启动动画
                elements34_font1[0].classList.add('appear');
                elements34_font2[0].classList.add('appear');
                elements34_font3[0].classList.add('appear');
                // 使用setTimeout或者其他逻辑来移除.appear类和添加.appear-active类，以触发进一步的动画效果
                setTimeout(() => {
                    elements34[0].style.visibility = "visible"
                    elements34_font1[0].classList.remove('appear');
                    elements34_font2[0].classList.remove('appear');
                    elements34_font3[0].classList.remove('appear');
                    elements34_font1[0].classList.add('appear-active');
                    elements34_font2[0].classList.add('appear-active');
                    elements34_font3[0].classList.add('appear-active');
                }, 900); // 根据CSS中的transition-delay来设置适当的时间
            }
        }
        setTimeout(() => {
            // 监听滚动事件
            window.addEventListener('scroll', () => {
                if (elements2.length > 0) {
                    // 获取元素的位置信息
                    const elements2Rect = elements2[0].getBoundingClientRect();
                    // 触发动画的条件，可以根据需要进行调整
                    if (elements2Rect.top < window.innerHeight && !elements2_once_flag) {
                        elements2_once_flag = true;
                        // 添加动画效果
                        // 添加.appear类来启动动画
                        elements2_font1[0].classList.add('appear');
                        elements2_font2[0].classList.add('appear');
                        elements2_img1[0].classList.add('appear');
                        elements2_article1[0].classList.add('appear');
                        elements2_font3[0].classList.add('appear');
                        elements2_font4[0].classList.add('appear');
                        elements2_font5[0].classList.add('appear');
                        elements2_font6[0].classList.add('appear');
                        // 使用setTimeout或者其他逻辑来移除.appear类和添加.appear-active类，以触发进一步的动画效果
                        setTimeout(() => {
                            elements2[0].style.visibility = "visible"
                            elements2_font1[0].classList.remove('appear');
                            elements2_font2[0].classList.remove('appear');
                            elements2_img1[0].classList.remove('appear');
                            elements2_article1[0].classList.remove('appear');
                            elements2_font3[0].classList.remove('appear');
                            elements2_font4[0].classList.remove('appear');
                            elements2_font5[0].classList.remove('appear');
                            elements2_font6[0].classList.remove('appear');
                            elements2_font1[0].classList.add('appear-active');
                            elements2_font2[0].classList.add('appear-active');
                            elements2_img1[0].classList.add('appear-active');
                            elements2_article1[0].classList.add('appear-active');
                            elements2_font3[0].classList.add('appear-active');
                            elements2_font4[0].classList.add('appear-active');
                            elements2_font5[0].classList.add('appear-active');
                            elements2_font6[0].classList.add('appear-active');
                        }, 900); // 根据CSS中的transition-delay来设置适当的时间
                    }
                }
                if (elements3.length > 0) {
                    const elements3Rect = elements3[0].getBoundingClientRect();
                    // 触发动画的条件，可以根据需要进行调整
                    if (elements3Rect.top < window.innerHeight && !elements3_once_flag) {
                        elements3_once_flag = true;
                        // 添加动画效果
                        // 添加.appear类来启动动画
                        elements3_font1[0].classList.add('appear');
                        elements3_font2[0].classList.add('appear');
                        elements3_img1[0].classList.add('appear');
                        elements3_article1[0].classList.add('appear');
                        elements3_font3[0].classList.add('appear');
                        elements3_font4[0].classList.add('appear');
                        elements3_font5[0].classList.add('appear');
                        // 使用setTimeout或者其他逻辑来移除.appear类和添加.appear-active类，以触发进一步的动画效果
                        setTimeout(() => {
                            elements3[0].style.visibility = "visible"
                            elements3_font1[0].classList.remove('appear');
                            elements3_font2[0].classList.remove('appear');
                            elements3_img1[0].classList.remove('appear');
                            elements3_article1[0].classList.remove('appear');
                            elements3_font3[0].classList.remove('appear');
                            elements3_font4[0].classList.remove('appear');
                            elements3_font5[0].classList.remove('appear');
                            elements3_font1[0].classList.add('appear-active');
                            elements3_font2[0].classList.add('appear-active');
                            elements3_img1[0].classList.add('appear-active');
                            elements3_article1[0].classList.add('appear-active');
                            elements3_font3[0].classList.add('appear-active');
                            elements3_font4[0].classList.add('appear-active');
                            elements3_font5[0].classList.add('appear-active');
                        }, 900); // 根据CSS中的transition-delay来设置适当的时间
                    }
                }
                if (elements4.length > 0) {
                    const elements4Rect = elements4[0].getBoundingClientRect();
                    // 触发动画的条件，可以根据需要进行调整
                    if (elements4Rect.top < window.innerHeight && !elements4_once_flag) {
                        elements4_once_flag = true;
                        // 添加动画效果
                        // 添加.appear类来启动动画
                        elements4_font1[0].classList.add('appear');
                        elements4_font2[0].classList.add('appear');
                        elements4_img1[0].classList.add('appear');
                        elements4_article1[0].classList.add('appear');
                        elements4_font3[0].classList.add('appear');
                        elements4_font4[0].classList.add('appear');
                        elements4_font5[0].classList.add('appear');
                        // 使用setTimeout或者其他逻辑来移除.appear类和添加.appear-active类，以触发进一步的动画效果
                        setTimeout(() => {
                            elements4[0].style.visibility = "visible"
                            elements4_font1[0].classList.remove('appear');
                            elements4_font2[0].classList.remove('appear');
                            elements4_img1[0].classList.remove('appear');
                            elements4_article1[0].classList.remove('appear');
                            elements4_font3[0].classList.remove('appear');
                            elements4_font4[0].classList.remove('appear');
                            elements4_font5[0].classList.remove('appear');
                            elements4_font1[0].classList.add('appear-active');
                            elements4_font2[0].classList.add('appear-active');
                            elements4_img1[0].classList.add('appear-active');
                            elements4_article1[0].classList.add('appear-active');
                            elements4_font3[0].classList.add('appear-active');
                            elements4_font4[0].classList.add('appear-active');
                            elements4_font5[0].classList.add('appear-active');
                        }, 900); // 根据CSS中的transition-delay来设置适当的时间
                    }
                }
                if (elements5.length > 0) {
                    const elements5Rect = elements5[0].getBoundingClientRect();
                    // 触发动画的条件，可以根据需要进行调整
                    if (elements5Rect.top < window.innerHeight && !elements5_once_flag) {
                        elements5_once_flag = true;
                        // 添加动画效果
                        // 添加.appear类来启动动画
                        elements5_font1[0].classList.add('appear');
                        elements5_font2[0].classList.add('appear');
                        elements5_article1[0].classList.add('appear');
                        elements5_article2[0].classList.add('appear');
                        elements5_article3[0].classList.add('appear');
                        // 使用setTimeout或者其他逻辑来移除.appear类和添加.appear-active类，以触发进一步的动画效果
                        setTimeout(() => {
                            elements5[0].style.visibility = "visible"
                            elements5_font1[0].classList.remove('appear');
                            elements5_font2[0].classList.remove('appear');
                            elements5_article1[0].classList.remove('appear');
                            elements5_article2[0].classList.remove('appear');
                            elements5_article3[0].classList.remove('appear');
                            elements5_font1[0].classList.add('appear-active');
                            elements5_font2[0].classList.add('appear-active');
                            elements5_article1[0].classList.add('appear-active');
                            elements5_article2[0].classList.add('appear-active');
                            elements5_article3[0].classList.add('appear-active');
                        }, 900); // 根据CSS中的transition-delay来设置适当的时间
                    }
                }
                if (elements7.length > 0) {
                    const elements7Rect = elements7[0].getBoundingClientRect();
                    // 触发动画的条件，可以根据需要进行调整
                    if (elements7Rect.top < window.innerHeight && !elements7_once_flag) {
                        elements7_once_flag = true;
                        // 添加动画效果
                        // 添加.appear类来启动动画
                        elements7_font1[0].classList.add('appear');
                        elements7_font2[0].classList.add('appear');
                        elements7_font3[0].classList.add('appear');
                        elements7_map[0].classList.add('appear');
                        // 使用setTimeout或者其他逻辑来移除.appear类和添加.appear-active类，以触发进一步的动画效果
                        setTimeout(() => {
                            elements7[0].style.visibility = "visible"
                            elements7_font1[0].classList.remove('appear');
                            elements7_font2[0].classList.remove('appear');
                            elements7_font3[0].classList.remove('appear');
                            elements7_map[0].classList.remove('appear');
                            elements7_font1[0].classList.add('appear-active');
                            elements7_font2[0].classList.add('appear-active');
                            elements7_font3[0].classList.add('appear-active');
                            elements7_map[0].classList.add('appear-active');
                        }, 900); // 根据CSS中的transition-delay来设置适当的时间
                    }
                }
                if (elements9.length > 0) {
                    const elements9Rect = elements9[0].getBoundingClientRect();
                    // 触发动画的条件，可以根据需要进行调整
                    if (elements9Rect.top < window.innerHeight && !elements9_once_flag) {
                        elements9_once_flag = true;
                        // 添加动画效果
                        // 添加.appear类来启动动画
                        elements9_font1[0].classList.add('appear');
                        elements9_font2[0].classList.add('appear');
                        elements9_font3[0].classList.add('appear');
                        elements9_font4[0].classList.add('appear');
                        elements9_form[0].classList.add('appear');
                        // 使用setTimeout或者其他逻辑来移除.appear类和添加.appear-active类，以触发进一步的动画效果
                        setTimeout(() => {
                            elements9[0].style.visibility = "visible"
                            elements9_font1[0].classList.remove('appear');
                            elements9_font2[0].classList.remove('appear');
                            elements9_font3[0].classList.remove('appear');
                            elements9_font4[0].classList.remove('appear');
                            elements9_form[0].classList.remove('appear');
                            elements9_font1[0].classList.add('appear-active');
                            elements9_font2[0].classList.add('appear-active');
                            elements9_font3[0].classList.add('appear-active');
                            elements9_font4[0].classList.add('appear-active');
                            elements9_form[0].classList.add('appear-active');
                        }, 900); // 根据CSS中的transition-delay来设置适当的时间
                    }
                }
                if (elements13.length > 0) {
                    const elements13Rect = elements13[0].getBoundingClientRect();
                    // 触发动画的条件，可以根据需要进行调整
                    if (elements13Rect.top < window.innerHeight && !elements13_once_flag) {
                        elements13_once_flag = true;
                        // 添加动画效果
                        // 添加.appear类来启动动画
                        elements13_font1[0].classList.add('appear');
                        elements13_font2[0].classList.add('appear');
                        // 使用setTimeout或者其他逻辑来移除.appear类和添加.appear-active类，以触发进一步的动画效果
                        setTimeout(() => {
                            elements13[0].style.visibility = "visible"
                            elements13_font1[0].classList.remove('appear');
                            elements13_font2[0].classList.remove('appear');
                            elements13_font1[0].classList.add('appear-active');
                            elements13_font2[0].classList.add('appear-active');
                        }, 900); // 根据CSS中的transition-delay来设置适当的时间
                    }
                }
                if (elements14.length > 0) {
                    const elements14Rect = elements14[0].getBoundingClientRect();
                    // 触发动画的条件，可以根据需要进行调整
                    if (elements14Rect.top < window.innerHeight && !elements14_once_flag) {
                        elements14_once_flag = true;
                        // 添加动画效果
                        // 添加.appear类来启动动画
                        elements14_article1[0].classList.add('appear');
                        elements14_font1[0].classList.add('appear');
                        elements14_font2[0].classList.add('appear');
                        elements14_font3[0].classList.add('appear');
                        elements14_font4[0].classList.add('appear');
                        elements14_font5[0].classList.add('appear');
                        // 使用setTimeout或者其他逻辑来移除.appear类和添加.appear-active类，以触发进一步的动画效果
                        setTimeout(() => {
                            elements14[0].style.visibility = "visible"
                            elements14_article1[0].classList.remove('appear');
                            elements14_font1[0].classList.remove('appear');
                            elements14_font2[0].classList.remove('appear');
                            elements14_font3[0].classList.remove('appear');
                            elements14_font4[0].classList.remove('appear');
                            elements14_font5[0].classList.remove('appear');
                            elements14_article1[0].classList.add('appear-active');
                            elements14_font1[0].classList.add('appear-active');
                            elements14_font2[0].classList.add('appear-active');
                            elements14_font3[0].classList.add('appear-active');
                            elements14_font4[0].classList.add('appear-active');
                            elements14_font5[0].classList.add('appear-active');
                        }, 900); // 根据CSS中的transition-delay来设置适当的时间
                    }
                }
                if (elements15.length > 0) {
                    const elements15Rect = elements15[0].getBoundingClientRect();
                    // 触发动画的条件，可以根据需要进行调整
                    if (elements15Rect.top < window.innerHeight && !elements15_once_flag) {
                        elements15_once_flag = true;
                        // 添加动画效果
                        // 添加.appear类来启动动画
                        elements15_font1[0].classList.add('appear');
                        elements15_font2[0].classList.add('appear');
                        elements15_font3[0].classList.add('appear');
                        // 使用setTimeout或者其他逻辑来移除.appear类和添加.appear-active类，以触发进一步的动画效果
                        setTimeout(() => {
                            elements15[0].style.visibility = "visible"
                            elements15_font1[0].classList.remove('appear');
                            elements15_font2[0].classList.remove('appear');
                            elements15_font3[0].classList.remove('appear');
                            elements15_font1[0].classList.add('appear-active');
                            elements15_font2[0].classList.add('appear-active');
                            elements15_font3[0].classList.add('appear-active');
                        }, 900); // 根据CSS中的transition-delay来设置适当的时间
                    }
                }
                if (elements16.length > 0) {
                    const elements16Rect = elements16[0].getBoundingClientRect();
                    // 触发动画的条件，可以根据需要进行调整
                    if (elements16Rect.top < window.innerHeight && !elements16_once_flag) {
                        elements16_once_flag = true;
                        // 添加动画效果
                        // 添加.appear类来启动动画
                        elements16_font1[0].classList.add('appear');
                        elements16_font2[0].classList.add('appear');
                        // 使用setTimeout或者其他逻辑来移除.appear类和添加.appear-active类，以触发进一步的动画效果
                        setTimeout(() => {
                            elements16[0].style.visibility = "visible"
                            elements16_font1[0].classList.remove('appear');
                            elements16_font2[0].classList.remove('appear');
                            elements16_font1[0].classList.add('appear-active');
                            elements16_font2[0].classList.add('appear-active');
                        }, 900); // 根据CSS中的transition-delay来设置适当的时间
                    }
                }
                if (elements17.length > 0) {
                    const elements17Rect = elements17[0].getBoundingClientRect();
                    // 触发动画的条件，可以根据需要进行调整
                    if (elements17Rect.top < window.innerHeight && !elements17_once_flag) {
                        elements17_once_flag = true;
                        // 添加动画效果
                        // 添加.appear类来启动动画
                        elements17_font1[0].classList.add('appear');
                        // 使用setTimeout或者其他逻辑来移除.appear类和添加.appear-active类，以触发进一步的动画效果
                        setTimeout(() => {
                            elements17[0].style.visibility = "visible"
                            elements17_font1[0].classList.remove('appear');
                            elements17_font1[0].classList.add('appear-active');
                        }, 900); // 根据CSS中的transition-delay来设置适当的时间
                    }
                }
                if (elements18.length > 0) {
                    const elements18Rect = elements18[0].getBoundingClientRect();
                    // 触发动画的条件，可以根据需要进行调整
                    if (elements18Rect.top < window.innerHeight && !elements18_once_flag) {
                        elements18_once_flag = true;
                        // 添加动画效果
                        // 添加.appear类来启动动画
                        elements18_font1[0].classList.add('appear');
                        elements18_font2[0].classList.add('appear');
                        elements18_font3[0].classList.add('appear');
                        elements18_font4[0].classList.add('appear');
                        elements18_form[0].classList.add('appear');
                        // 使用setTimeout或者其他逻辑来移除.appear类和添加.appear-active类，以触发进一步的动画效果
                        setTimeout(() => {
                            elements18[0].style.visibility = "visible"
                            elements18_font1[0].classList.remove('appear');
                            elements18_font2[0].classList.remove('appear');
                            elements18_font3[0].classList.remove('appear');
                            elements18_font4[0].classList.remove('appear');
                            elements18_form[0].classList.remove('appear');
                            elements18_font1[0].classList.add('appear-active');
                            elements18_font2[0].classList.add('appear-active');
                            elements18_font3[0].classList.add('appear-active');
                            elements18_font4[0].classList.add('appear-active');
                            elements18_form[0].classList.add('appear-active');
                        }, 900); // 根据CSS中的transition-delay来设置适当的时间
                    }
                }
                if (elements21.length > 0) {
                    const elements21Rect = elements21[0].getBoundingClientRect();
                    // 触发动画的条件，可以根据需要进行调整
                    if (elements21Rect.top < window.innerHeight && !elements21_once_flag) {
                        elements21_once_flag = true;
                        // 添加动画效果
                        // 添加.appear类来启动动画
                        elements21_font1[0].classList.add('appear');
                        elements21_font2[0].classList.add('appear');
                        elements21_font3[0].classList.add('appear');
                        elements21_font4[0].classList.add('appear');
                        elements21_font5[0].classList.add('appear');
                        elements21_font6[0].classList.add('appear');
                        elements21_font7[0].classList.add('appear');
                        elements21_font8[0].classList.add('appear');
                        elements21_font9[0].classList.add('appear');
                        elements21_font10[0].classList.add('appear');
                        elements21_font11[0].classList.add('appear');
                        // 使用setTimeout或者其他逻辑来移除.appear类和添加.appear-active类，以触发进一步的动画效果
                        setTimeout(() => {
                            elements21[0].style.visibility = "visible"
                            elements21_font1[0].classList.remove('appear');
                            elements21_font2[0].classList.remove('appear');
                            elements21_font3[0].classList.remove('appear');
                            elements21_font4[0].classList.remove('appear');
                            elements21_font5[0].classList.remove('appear');
                            elements21_font6[0].classList.remove('appear');
                            elements21_font7[0].classList.remove('appear');
                            elements21_font8[0].classList.remove('appear');
                            elements21_font9[0].classList.remove('appear');
                            elements21_font10[0].classList.remove('appear');
                            elements21_font11[0].classList.remove('appear');
                            elements21_font1[0].classList.add('appear-active');
                            elements21_font2[0].classList.add('appear-active');
                            elements21_font3[0].classList.add('appear-active');
                            elements21_font4[0].classList.add('appear-active');
                            elements21_font5[0].classList.add('appear-active');
                            elements21_font6[0].classList.add('appear-active');
                            elements21_font7[0].classList.add('appear-active');
                            elements21_font8[0].classList.add('appear-active');
                            elements21_font9[0].classList.add('appear-active');
                            elements21_font10[0].classList.add('appear-active');
                            elements21_font11[0].classList.add('appear-active');
                        }, 900); // 根据CSS中的transition-delay来设置适当的时间
                    }
                }
                if (elements22.length > 0) {
                    const elements22Rect = elements22[0].getBoundingClientRect();
                    // 触发动画的条件，可以根据需要进行调整
                    if (elements22Rect.top < window.innerHeight && !elements22_once_flag) {
                        elements22_once_flag = true;
                        // 添加动画效果
                        // 添加.appear类来启动动画
                        elements22_font1[0].classList.add('appear');
                        elements22_font2[0].classList.add('appear');
                        elements22_font3[0].classList.add('appear');
                        elements22_font4[0].classList.add('appear');
                        elements22_font5[0].classList.add('appear');
                        elements22_font6[0].classList.add('appear');
                        elements22_font7[0].classList.add('appear');
                        elements22_font8[0].classList.add('appear');
                        elements22_font9[0].classList.add('appear');
                        elements22_font10[0].classList.add('appear');
                        elements22_font11[0].classList.add('appear');
                        // 使用setTimeout或者其他逻辑来移除.appear类和添加.appear-active类，以触发进一步的动画效果
                        setTimeout(() => {
                            elements22[0].style.visibility = "visible"
                            elements22_font1[0].classList.remove('appear');
                            elements22_font2[0].classList.remove('appear');
                            elements22_font3[0].classList.remove('appear');
                            elements22_font4[0].classList.remove('appear');
                            elements22_font5[0].classList.remove('appear');
                            elements22_font6[0].classList.remove('appear');
                            elements22_font7[0].classList.remove('appear');
                            elements22_font8[0].classList.remove('appear');
                            elements22_font9[0].classList.remove('appear');
                            elements22_font10[0].classList.remove('appear');
                            elements22_font11[0].classList.remove('appear');
                            elements22_font1[0].classList.add('appear-active');
                            elements22_font2[0].classList.add('appear-active');
                            elements22_font3[0].classList.add('appear-active');
                            elements22_font4[0].classList.add('appear-active');
                            elements22_font5[0].classList.add('appear-active');
                            elements22_font6[0].classList.add('appear-active');
                            elements22_font7[0].classList.add('appear-active');
                            elements22_font8[0].classList.add('appear-active');
                            elements22_font9[0].classList.add('appear-active');
                            elements22_font10[0].classList.add('appear-active');
                            elements22_font11[0].classList.add('appear-active');
                        }, 900); // 根据CSS中的transition-delay来设置适当的时间
                    }
                }
                if (elements23.length > 0) {
                    const elements23Rect = elements23[0].getBoundingClientRect();
                    // 触发动画的条件，可以根据需要进行调整
                    if (elements23Rect.top < window.innerHeight && !elements23_once_flag) {
                        elements23_once_flag = true;
                        // 添加动画效果
                        // 添加.appear类来启动动画
                        elements23_font1[0].classList.add('appear');
                        elements23_font2[0].classList.add('appear');
                        elements23_font3[0].classList.add('appear');
                        elements23_font4[0].classList.add('appear');
                        elements23_font5[0].classList.add('appear');
                        elements23_font6[0].classList.add('appear');
                        elements23_font7[0].classList.add('appear');
                        elements23_font8[0].classList.add('appear');
                        elements23_font9[0].classList.add('appear');
                        elements23_font10[0].classList.add('appear');
                        elements23_font11[0].classList.add('appear');
                        // 使用setTimeout或者其他逻辑来移除.appear类和添加.appear-active类，以触发进一步的动画效果
                        setTimeout(() => {
                            elements23[0].style.visibility = "visible"
                            elements23_font1[0].classList.remove('appear');
                            elements23_font2[0].classList.remove('appear');
                            elements23_font3[0].classList.remove('appear');
                            elements23_font4[0].classList.remove('appear');
                            elements23_font5[0].classList.remove('appear');
                            elements23_font6[0].classList.remove('appear');
                            elements23_font7[0].classList.remove('appear');
                            elements23_font8[0].classList.remove('appear');
                            elements23_font9[0].classList.remove('appear');
                            elements23_font10[0].classList.remove('appear');
                            elements23_font11[0].classList.remove('appear');
                            elements23_font1[0].classList.add('appear-active');
                            elements23_font2[0].classList.add('appear-active');
                            elements23_font3[0].classList.add('appear-active');
                            elements23_font4[0].classList.add('appear-active');
                            elements23_font5[0].classList.add('appear-active');
                            elements23_font6[0].classList.add('appear-active');
                            elements23_font7[0].classList.add('appear-active');
                            elements23_font8[0].classList.add('appear-active');
                            elements23_font9[0].classList.add('appear-active');
                            elements23_font10[0].classList.add('appear-active');
                            elements23_font11[0].classList.add('appear-active');
                        }, 900); // 根据CSS中的transition-delay来设置适当的时间
                    }
                }
                if (elements24.length > 0) {
                    const elements24Rect = elements24[0].getBoundingClientRect();
                    // 触发动画的条件，可以根据需要进行调整
                    if (elements24Rect.top < window.innerHeight && !elements24_once_flag) {
                        elements24_once_flag = true;
                        // 添加动画效果
                        // 添加.appear类来启动动画
                        elements24_font1[0].classList.add('appear');
                        elements24_font2[0].classList.add('appear');
                        elements24_font3[0].classList.add('appear');
                        elements24_font4[0].classList.add('appear');
                        elements24_font5[0].classList.add('appear');
                        elements24_font6[0].classList.add('appear');
                        elements24_font7[0].classList.add('appear');
                        elements24_font8[0].classList.add('appear');
                        elements24_font9[0].classList.add('appear');
                        elements24_font10[0].classList.add('appear');
                        elements24_font11[0].classList.add('appear');
                        elements24_font12[0].classList.add('appear');
                        // 使用setTimeout或者其他逻辑来移除.appear类和添加.appear-active类，以触发进一步的动画效果
                        setTimeout(() => {
                            elements24[0].style.visibility = "visible"
                            elements24_font1[0].classList.remove('appear');
                            elements24_font2[0].classList.remove('appear');
                            elements24_font3[0].classList.remove('appear');
                            elements24_font4[0].classList.remove('appear');
                            elements24_font5[0].classList.remove('appear');
                            elements24_font6[0].classList.remove('appear');
                            elements24_font7[0].classList.remove('appear');
                            elements24_font8[0].classList.remove('appear');
                            elements24_font9[0].classList.remove('appear');
                            elements24_font10[0].classList.remove('appear');
                            elements24_font11[0].classList.remove('appear');
                            elements24_font12[0].classList.remove('appear');
                            elements24_font1[0].classList.add('appear-active');
                            elements24_font2[0].classList.add('appear-active');
                            elements24_font3[0].classList.add('appear-active');
                            elements24_font4[0].classList.add('appear-active');
                            elements24_font5[0].classList.add('appear-active');
                            elements24_font6[0].classList.add('appear-active');
                            elements24_font7[0].classList.add('appear-active');
                            elements24_font8[0].classList.add('appear-active');
                            elements24_font9[0].classList.add('appear-active');
                            elements24_font10[0].classList.add('appear-active');
                            elements24_font11[0].classList.add('appear-active');
                            elements24_font12[0].classList.add('appear-active');
                        }, 900); // 根据CSS中的transition-delay来设置适当的时间
                    }
                }
                if (elements25.length > 0) {
                    const elements25Rect = elements25[0].getBoundingClientRect();
                    // 触发动画的条件，可以根据需要进行调整
                    if (elements25Rect.top < window.innerHeight && !elements25_once_flag) {
                        elements25_once_flag = true;
                        // 添加动画效果
                        // 添加.appear类来启动动画
                        elements25_font1[0].classList.add('appear');
                        elements25_font2[0].classList.add('appear');
                        elements25_font3[0].classList.add('appear');
                        elements25_font4[0].classList.add('appear');
                        elements25_form[0].classList.add('appear');
                        // 使用setTimeout或者其他逻辑来移除.appear类和添加.appear-active类，以触发进一步的动画效果
                        setTimeout(() => {
                            elements25[0].style.visibility = "visible"
                            elements25_font1[0].classList.remove('appear');
                            elements25_font2[0].classList.remove('appear');
                            elements25_font3[0].classList.remove('appear');
                            elements25_font4[0].classList.remove('appear');
                            elements25_form[0].classList.remove('appear');
                            elements25_font1[0].classList.add('appear-active');
                            elements25_font2[0].classList.add('appear-active');
                            elements25_font3[0].classList.add('appear-active');
                            elements25_font4[0].classList.add('appear-active');
                            elements25_form[0].classList.add('appear-active');
                        }, 900); // 根据CSS中的transition-delay来设置适当的时间
                    }
                }
                if (elements28.length > 0) {
                    const elements28Rect = elements28[0].getBoundingClientRect();
                    // 触发动画的条件，可以根据需要进行调整
                    if (elements28Rect.top < window.innerHeight && !elements28_once_flag) {
                        elements28_once_flag = true;
                        // 添加动画效果
                        // 添加.appear类来启动动画
                        elements28_font1[0].classList.add('appear');
                        elements28_font2[0].classList.add('appear');
                        // 使用setTimeout或者其他逻辑来移除.appear类和添加.appear-active类，以触发进一步的动画效果
                        setTimeout(() => {
                            elements28[0].style.visibility = "visible"
                            elements28_font1[0].classList.remove('appear');
                            elements28_font2[0].classList.remove('appear');
                            elements28_font1[0].classList.add('appear-active');
                            elements28_font2[0].classList.add('appear-active');
                        }, 900); // 根据CSS中的transition-delay来设置适当的时间
                    }
                }
                if (elements29.length > 0) {
                    const elements29Rect = elements29[0].getBoundingClientRect();
                    // 触发动画的条件，可以根据需要进行调整
                    if (elements29Rect.top < window.innerHeight && !elements29_once_flag) {
                        elements29_once_flag = true;
                        // 添加动画效果
                        // 添加.appear类来启动动画
                        elements29_article1[0].classList.add('appear');
                        elements29_font1[0].classList.add('appear');
                        elements29_font2[0].classList.add('appear');
                        elements29_font3[0].classList.add('appear');
                        elements29_font4[0].classList.add('appear');
                        elements29_font5[0].classList.add('appear');
                        // 使用setTimeout或者其他逻辑来移除.appear类和添加.appear-active类，以触发进一步的动画效果
                        setTimeout(() => {
                            elements29[0].style.visibility = "visible"
                            elements29_article1[0].classList.remove('appear');
                            elements29_font1[0].classList.remove('appear');
                            elements29_font2[0].classList.remove('appear');
                            elements29_font3[0].classList.remove('appear');
                            elements29_font4[0].classList.remove('appear');
                            elements29_font5[0].classList.remove('appear');
                            elements29_article1[0].classList.add('appear-active');
                            elements29_font1[0].classList.add('appear-active');
                            elements29_font2[0].classList.add('appear-active');
                            elements29_font3[0].classList.add('appear-active');
                            elements29_font4[0].classList.add('appear-active');
                            elements29_font5[0].classList.add('appear-active');
                        }, 900); // 根据CSS中的transition-delay来设置适当的时间
                    }
                }
                if (elements30.length > 0) {
                    const elements30Rect = elements30[0].getBoundingClientRect();
                    // 触发动画的条件，可以根据需要进行调整
                    if (elements30Rect.top < window.innerHeight && !elements30_once_flag) {
                        elements30_once_flag = true;
                        // 添加动画效果
                        // 添加.appear类来启动动画
                        elements30_font1[0].classList.add('appear');
                        elements30_font2[0].classList.add('appear');
                        elements30_font3[0].classList.add('appear');
                        // 使用setTimeout或者其他逻辑来移除.appear类和添加.appear-active类，以触发进一步的动画效果
                        setTimeout(() => {
                            elements30[0].style.visibility = "visible"
                            elements30_font1[0].classList.remove('appear');
                            elements30_font2[0].classList.remove('appear');
                            elements30_font3[0].classList.remove('appear');
                            elements30_font1[0].classList.add('appear-active');
                            elements30_font2[0].classList.add('appear-active');
                            elements30_font3[0].classList.add('appear-active');
                        }, 900); // 根据CSS中的transition-delay来设置适当的时间
                    }
                }
                if (elements31.length > 0) {
                    const elements31Rect = elements31[0].getBoundingClientRect();
                    // 触发动画的条件，可以根据需要进行调整
                    if (elements31Rect.top < window.innerHeight && !elements31_once_flag) {
                        elements31_once_flag = true;
                        // 添加动画效果
                        // 添加.appear类来启动动画
                        elements31_font1[0].classList.add('appear');
                        elements31_font2[0].classList.add('appear');
                        // 使用setTimeout或者其他逻辑来移除.appear类和添加.appear-active类，以触发进一步的动画效果
                        setTimeout(() => {
                            elements31[0].style.visibility = "visible"
                            elements31_font1[0].classList.remove('appear');
                            elements31_font2[0].classList.remove('appear');
                            elements31_font1[0].classList.add('appear-active');
                            elements31_font2[0].classList.add('appear-active');
                        }, 900); // 根据CSS中的transition-delay来设置适当的时间
                    }
                }
                if (elements32.length > 0) {
                    const elements32Rect = elements32[0].getBoundingClientRect();
                    // 触发动画的条件，可以根据需要进行调整
                    if (elements32Rect.top < window.innerHeight && !elements32_once_flag) {
                        elements32_once_flag = true;
                        // 添加动画效果
                        // 添加.appear类来启动动画
                        elements32_font1[0].classList.add('appear');
                        // 使用setTimeout或者其他逻辑来移除.appear类和添加.appear-active类，以触发进一步的动画效果
                        setTimeout(() => {
                            elements32[0].style.visibility = "visible"
                            elements32_font1[0].classList.remove('appear');
                            elements32_font1[0].classList.add('appear-active');
                        }, 900); // 根据CSS中的transition-delay来设置适当的时间
                    }
                }
                if (elements33.length > 0) {
                    const elements33Rect = elements33[0].getBoundingClientRect();
                    // 触发动画的条件，可以根据需要进行调整
                    if (elements33Rect.top < window.innerHeight && !elements33_once_flag) {
                        elements33_once_flag = true;
                        // 添加动画效果
                        // 添加.appear类来启动动画
                        elements33_font1[0].classList.add('appear');
                        elements33_font2[0].classList.add('appear');
                        elements33_font3[0].classList.add('appear');
                        elements33_font4[0].classList.add('appear');
                        elements33_form[0].classList.add('appear');
                        // 使用setTimeout或者其他逻辑来移除.appear类和添加.appear-active类，以触发进一步的动画效果
                        setTimeout(() => {
                            elements33[0].style.visibility = "visible"
                            elements33_font1[0].classList.remove('appear');
                            elements33_font2[0].classList.remove('appear');
                            elements33_font3[0].classList.remove('appear');
                            elements33_font4[0].classList.remove('appear');
                            elements33_form[0].classList.remove('appear');
                            elements33_font1[0].classList.add('appear-active');
                            elements33_font2[0].classList.add('appear-active');
                            elements33_font3[0].classList.add('appear-active');
                            elements33_font4[0].classList.add('appear-active');
                            elements33_form[0].classList.add('appear-active');
                        }, 900); // 根据CSS中的transition-delay来设置适当的时间
                    }
                }
                if (elements36.length > 0) {
                    const elements36Rect = elements36[0].getBoundingClientRect();
                    // 触发动画的条件，可以根据需要进行调整
                    if (elements36Rect.top < window.innerHeight && !elements36_once_flag) {
                        elements36_once_flag = true;
                        // 添加动画效果
                        // 添加.appear类来启动动画
                        elements36_font1[0].classList.add('appear');
                        elements36_font2[0].classList.add('appear');
                        // 使用setTimeout或者其他逻辑来移除.appear类和添加.appear-active类，以触发进一步的动画效果
                        setTimeout(() => {
                            elements36[0].style.visibility = "visible"
                            elements36_font1[0].classList.remove('appear');
                            elements36_font2[0].classList.remove('appear');
                            elements36_font1[0].classList.add('appear-active');
                            elements36_font2[0].classList.add('appear-active');
                        }, 900); // 根据CSS中的transition-delay来设置适当的时间
                    }
                }
                if (elements37.length > 0) {
                    const elements37Rect = elements37[0].getBoundingClientRect();
                    // 触发动画的条件，可以根据需要进行调整
                    if (elements37Rect.top < window.innerHeight && !elements37_once_flag) {
                        elements37_once_flag = true;
                        // 添加动画效果
                        // 添加.appear类来启动动画
                        elements37_article1[0].classList.add('appear');
                        elements37_font1[0].classList.add('appear');
                        elements37_font2[0].classList.add('appear');
                        elements37_font3[0].classList.add('appear');
                        elements37_font4[0].classList.add('appear');
                        elements37_font5[0].classList.add('appear');
                        elements37_font6[0].classList.add('appear');
                        elements37_font7[0].classList.add('appear');
                        elements37_font8[0].classList.add('appear');
                        elements37_font9[0].classList.add('appear');
                        elements37_font10[0].classList.add('appear');
                        elements37_font11[0].classList.add('appear');
                        elements37_font12[0].classList.add('appear');
                        elements37_font13[0].classList.add('appear');
                        elements37_font14[0].classList.add('appear');
                        elements37_font15[0].classList.add('appear');
                        elements37_font16[0].classList.add('appear');
                        elements37_font17[0].classList.add('appear');
                        // 使用setTimeout或者其他逻辑来移除.appear类和添加.appear-active类，以触发进一步的动画效果
                        setTimeout(() => {
                            elements37[0].style.visibility = "visible"
                            elements37_article1[0].classList.remove('appear');
                            elements37_font1[0].classList.remove('appear');
                            elements37_font2[0].classList.remove('appear');
                            elements37_font3[0].classList.remove('appear');
                            elements37_font4[0].classList.remove('appear');
                            elements37_font5[0].classList.remove('appear');
                            elements37_font6[0].classList.remove('appear');
                            elements37_font7[0].classList.remove('appear');
                            elements37_font8[0].classList.remove('appear');
                            elements37_font9[0].classList.remove('appear');
                            elements37_font10[0].classList.remove('appear');
                            elements37_font11[0].classList.remove('appear');
                            elements37_font12[0].classList.remove('appear');
                            elements37_font13[0].classList.remove('appear');
                            elements37_font14[0].classList.remove('appear');
                            elements37_font15[0].classList.remove('appear');
                            elements37_font16[0].classList.remove('appear');
                            elements37_font17[0].classList.remove('appear');
                            elements37_article1[0].classList.add('appear-active');
                            elements37_font1[0].classList.add('appear-active');
                            elements37_font2[0].classList.add('appear-active');
                            elements37_font3[0].classList.add('appear-active');
                            elements37_font4[0].classList.add('appear-active');
                            elements37_font5[0].classList.add('appear-active');
                            elements37_font6[0].classList.add('appear-active');
                            elements37_font7[0].classList.add('appear-active');
                            elements37_font8[0].classList.add('appear-active');
                            elements37_font9[0].classList.add('appear-active');
                            elements37_font10[0].classList.add('appear-active');
                            elements37_font11[0].classList.add('appear-active');
                            elements37_font12[0].classList.add('appear-active');
                            elements37_font13[0].classList.add('appear-active');
                            elements37_font14[0].classList.add('appear-active');
                            elements37_font15[0].classList.add('appear-active');
                            elements37_font16[0].classList.add('appear-active');
                            elements37_font17[0].classList.add('appear-active');
                        }, 900); // 根据CSS中的transition-delay来设置适当的时间
                    }
                }
                if (elements38.length > 0) {
                    const elements38Rect = elements38[0].getBoundingClientRect();
                    // 触发动画的条件，可以根据需要进行调整
                    if (elements38Rect.top < window.innerHeight && !elements38_once_flag) {
                        elements38_once_flag = true;
                        // 添加动画效果
                        // 添加.appear类来启动动画
                        elements38_font1[0].classList.add('appear');
                        elements38_font2[0].classList.add('appear');
                        elements38_font3[0].classList.add('appear');
                        // 使用setTimeout或者其他逻辑来移除.appear类和添加.appear-active类，以触发进一步的动画效果
                        setTimeout(() => {
                            elements38[0].style.visibility = "visible"
                            elements38_font1[0].classList.remove('appear');
                            elements38_font2[0].classList.remove('appear');
                            elements38_font3[0].classList.remove('appear');
                            elements38_font1[0].classList.add('appear-active');
                            elements38_font2[0].classList.add('appear-active');
                            elements38_font3[0].classList.add('appear-active');
                        }, 900); // 根据CSS中的transition-delay来设置适当的时间
                    }
                }
                if (elements39.length > 0) {
                    const elements39Rect = elements39[0].getBoundingClientRect();
                    // 触发动画的条件，可以根据需要进行调整
                    if (elements39Rect.top < window.innerHeight && !elements39_once_flag) {
                        elements39_once_flag = true;
                        // 添加动画效果
                        // 添加.appear类来启动动画
                        elements39_font1[0].classList.add('appear');
                        // 使用setTimeout或者其他逻辑来移除.appear类和添加.appear-active类，以触发进一步的动画效果
                        setTimeout(() => {
                            elements39[0].style.visibility = "visible"
                            elements39_font1[0].classList.remove('appear');
                            elements39_font1[0].classList.add('appear-active');
                        }, 900); // 根据CSS中的transition-delay来设置适当的时间
                    }
                }
                if (elements40.length > 0) {
                    const elements40Rect = elements40[0].getBoundingClientRect();
                    // 触发动画的条件，可以根据需要进行调整
                    if (elements40Rect.top < window.innerHeight && !elements40_once_flag) {
                        elements40_once_flag = true;
                        // 添加动画效果
                        // 添加.appear类来启动动画
                        elements40_font1[0].classList.add('appear');
                        elements40_font2[0].classList.add('appear');
                        elements40_font3[0].classList.add('appear');
                        elements40_font4[0].classList.add('appear');
                        elements40_form[0].classList.add('appear');
                        // 使用setTimeout或者其他逻辑来移除.appear类和添加.appear-active类，以触发进一步的动画效果
                        setTimeout(() => {
                            elements40[0].style.visibility = "visible"
                            elements40_font1[0].classList.remove('appear');
                            elements40_font2[0].classList.remove('appear');
                            elements40_font3[0].classList.remove('appear');
                            elements40_font4[0].classList.remove('appear');
                            elements40_form[0].classList.remove('appear');
                            elements40_font1[0].classList.add('appear-active');
                            elements40_font2[0].classList.add('appear-active');
                            elements40_font3[0].classList.add('appear-active');
                            elements40_font4[0].classList.add('appear-active');
                            elements40_form[0].classList.add('appear-active');
                        }, 900); // 根据CSS中的transition-delay来设置适当的时间
                    }
                }
            });
        }, 1000);
    }, 100);
}

function clickDisplay() {
    const list = document.getElementsByName('serviceId');
    if (list[0].className.indexOf('_isClose') == -1) {
        for (let i = 0; i < list.length; ++i) {
            list[i].className = list[i].className + ' _isClose';
        }
    } else {
        for (let i = 0; i < list.length; ++i) {
            list[i].className = list[i].className.replaceAll(' _isClose', '');
        }
    }

}
