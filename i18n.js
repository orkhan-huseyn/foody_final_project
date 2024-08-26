import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    az: {
        translation: {
            home: 'Ana səhifə',
            restaurants: 'Restoranlar',
            about: 'Haqqımızda',
            howitworks: 'Necə işləyir',
            faqs: 'Tez-tez verilən suallar',
            search: 'Axtar...',
            signup: 'Qeydiyyat',
            herotitle:
                'Bizim Yemək saytımız yerli yeməkləri tapmağı asanlaşdırır',
            herodescription:
                'Yerli restoranları və kafe-ləri axtarmaq, fərqli menyu seçimlərini nəzərdən keçirmək və sevdiyiniz yeməkləri tapmaq artıq çox asandır.',
            register: 'Qeydiyyat',
            ordernow: 'İndi sifariş et',
            features: 'Xüsusiyyətlər',
            featuresdesc:
                'Məhsulumuzun seçilməsini təmin edən əsas xüsusiyyətləri kəşf edin. İnovativ dizayndan və qabaqcıl texnologiyadan istifadə edərək, istifadəçi dostu funksionallığa qədər hər bir xüsusiyyət təcrübənizi artırmaq və mükəmməl performans təmin etmək üçün hazırlanmışdır.',
            discountvoucher: 'Endirim kuponu',
            freshfood: 'Təzə və sağlam qida',
            homedelivery: 'Evə Sürətli çatdırılma',
            featurescarddesc:
                'Bu ləzzətli yemək təzə inqrediyentlərlə hazırlanıb, dadı ilə sizi heyran edəcək',

            homemenuone: 'Sizi həmişə aşiq edən menyu',
            homemenutwo: 'Həmişə dadlı Papa John’s Pizzası. Razısınız?',
            homemenuthree: 'Kartof qızartmasını sevirsiniz? Mmm...',
            homemenupr1:
                'Bu dadlı seçimlərimizlə siz də məmnun qalacaqsınız! Hər bir ləzzət mükəmməl təravəti və dadı ilə sizi təəccübləndirəcək. İndi sifariş edin və bu unudulmaz dad təcrübəsini yaşayın. Sevdiklərinizlə paylaşmaq üçün ən gözəl məkan buradadır!',
            homemenupr2:
                'Bu dadlı seçimlərimizlə siz də məmnun qalacaqsınız! Hər bir ləzzət mükəmməl təravəti və dadı ilə sizi təəccübləndirəcək.',
            ourpopularfoods: 'Ən məşhur yeməklərimiz',
            newfoods: 'Yeni yeməklərimiz',
            newfoodspr:
                'Ənənəvi sevimlilərdən xüsusi ixtiralara qədər, məşhur yeməklərimiz çoxlarının sevimlisidir. ',
            dubblechees: 'İkili Çizburger',
            twistermenu: 'Twister Menyu',
            menudesc:
                'Hər yeməyimiz mükəmməl dad və məmnuniyyət təqdim etmək üçün hazırlanıb.',
            discoveryrest: 'Sizin yaxınlığınızdakı restoranları kəşf edin',
            explorenow: 'İndi kəşf et',
            //FOOTER

            popular: 'Məşhur',
            programming: 'Proqramlaşdırma',
            booksforchildren: 'Uşaq Kitabları',
            psychology: 'Psixologiya',
            business: 'Biznes',
            cash: 'Nağd pul',
            deliverylink: 'Çatdırılma',
            payment: 'Ödəmə',
            aboutthestore: 'Mağaza haqqında',
            help: 'Kömək',
            contacts: 'Əlaqələr',
            purchasereturns: 'Alış-veriş qaytarışı',
            buyerhelp: 'Alıcı Köməyi',
            copyright:
                'Bütün hüquqlar qorunur © 2003-2022 Foody İSTİFADƏ ŞƏRTLƏRİ | Məxfilik Siyasəti',

            // ABOUT US

            aboutdesclarge:
                'Biz, sizə ən yüksək keyfiyyətdə yerli və təzə qida məhsullarını təqdim etmək üçün yaradılmış bir qida platformasıyıq. Məqsədimiz, hər bir müştərimizin məmnuniyyətini təmin edərək onların zövqlərini qarşılamaqdır. Yeməklərimiz həm ləzzəti, həm də təravəti ilə seçilir, və biz hər sifarişdə sizə ən yaxşı xidməti göstərməyə çalışırıq. Komandamız, hər bir detala diqqət yetirərək, müştərilərimizin istəklərini ön planda tutmağa sadiqdir. Bizimlə tanış olun, geniş çeşidli menyumuzdan dadlı seçimlər edin və mükəmməl yemək təcrübəsinin dadını çıxarın!',

            aboutdescsmall:
                'Biz, sizə ən yüksək keyfiyyətdə yerli və təzə qida məhsullarını təqdim etmək üçün yaradılmış bir qida platformasıyıq. Məqsədimiz, hər bir müştərimizin məmnuniyyətini təmin edərək onların zövqlərini qarşılamaqdır.',

            // HOW IT WORKS

            howitworksdesc:
                'Çatdırılma müddəti satış dövrlərində uzana bilər. Zəhmət olmasa, yerinizə uyğun yenilənmiş təxmin üçün ödəniş səhifəsinə müraciət edin. Nəzərə alın ki, sifariş verdikdən sonra sifarişinizi dəyişdirmək artıq mümkün deyil. Vergi və rüsumlar bütün məhsul qiymətlərinə daxildir. Kredit kartı ilə ödəmə zamanı evinizin və ya ödəniş ünvanınızın fərqli bir ünvana çatdırılma ilə sifariş vermək mümkündür. Lakin, Klarna ödəmələri üçün sifarişinizin qeydiyyatdan keçmiş ev ünvanınıza göndərilməsini tələb edir.',

            // FAQ

            faqtitle: 'Tez-tez verilən suallar',
            faqquestion1: 'Müştəri Xidməti ilə necə əlaqə saxlaya bilərəm?',
            faqquestion2:
                'Proqramın quraşdırılması uğursuz oldu, sistem məlumatlarını necə yeniləmək olar?',
            faqquestion3:
                'Vebsaytın cavab verməsi vaxt alır, bunu necə yaxşılaşdırmaq olar?',
            faqquestion4: 'Hesab necə yaradaram?',
            faqquestion5: 'Şifrəm necə sıfırlaya bilərəm?',

            faqanswer1:
                'Müştəri Təcrübəsi Komandamız həftənin 7 günü xidmətinizdədir və sizə iki əlaqə üsulu təklif edirik: E-poçt və Çat. Cavab verməyə çalışırıq, buna görə uzun müddət gözləməyinizə ehtiyac yoxdur!',
            faqanswer2:
                'Sisteminizin tətbiqin tələblərinə cavab verdiyindən əmin olun və əməliyyat sisteminizi və sürücülərinizi yeniləyin. Tətbiqin sənədlərini xüsusi tələblər üçün yoxlayın. Bu yeniləmələrdən sonra tətbiqi yenidən quraşdırmağı sınayın.',
            faqanswer3:
                'Şəkilləri və skriptləri optimallaşdırın, məzmun çatdırılma şəbəkəsi (CDN) istifadə edin və keş strategiyalarını tətbiq edin. Bu addımlar yükləmə vaxtını azaldır və performansı artırır. Həmçinin, verilənlər bazası sorğularınızı optimallaşdırmağı düşünün.',
            faqanswer4:
                'Ana səhifədəki "Qeydiyyatdan Keç" düyməsinə klikləyin və adınızı, e-poçtunuzu və şifrənizi daxil edərək tələb olunan sahələri doldurun. E-poçtunuza göndərilən linkə klikləyərək e-poçtunuzu təsdiqləyin. Quraşdırmanı tamamlamaq üçün əlavə addımları izləyin.',
            faqanswer5:
                "Giriş səhifəsindəki 'Şifrəni Unutdum' linkinə klikləyin. Qeydiyyatdan keçdiyiniz e-poçt ünvanınızı daxil edin və şifrənizi sıfırlamaq üçün bir link alacaqsınız. E-poçtdakı təlimatları izləyərək yeni şifrə yaradın.",

            // LOGIN REGISTER

            login: 'Giriş',
            username: 'İstifadəçi adı',
            password: 'Şifrə',
            placeholderusername: 'istifadəçi adı',
            placeholderpassword: 'şifrə',
            loginbutton: 'Giriş',
            fullname: 'Tam ad',
            fullnameplaceholder: 'tam ad',
            email: 'E-poçt',
            emailplaceholder: 'istifadəçi@mail.ru',

            // PROFILE
            profile: 'Profil',
            upload: 'Yükləyin',
            contact: 'Əlaqə',
            address: 'Ünvan',
            baku: 'Bakı',
            azerbaijan: 'Azərbaycan',
            save: 'Saxla',
            yourbasket: 'Sənin Səbətin',
            items: 'Məhsul',
            checkedtext: 'Sifarişiniz uğurla alındı',
            yourorders: 'Sifarişləriniz',
            time: 'Zaman',
            deliveryaddress: 'Çatdırılma Ünvanı',
            paymentmethod: 'Ödəniş Metodu',
            amount: 'Məbləğ',
            perpage: 'Səhifələr',
            show: 'Göstər',
            delete: 'Sil',
            productdetails: 'Məhsul Təfərrüatları',
            image: 'Şəkil',
            name: 'Ad',
            price: 'Qiymət',
            count: 'Say',
            checkout: 'Yoxlanış',
            logout: 'Çıxış',

            // Restaurants
            cuisine: 'Mətbəx',
            goback: 'Geri',
            from: 'Başlayaraq',
            delivery: 'Çatdırılma',
            products: 'Məhsullar',
            emptybasket: 'Səbət Boşdur',
        },
    },

    en: {
        translation: {
            home: 'Home',
            restaurants: 'Restaurants',
            about: 'About Us',
            howitworks: 'How it works',
            faqs: 'FAQs',
            search: 'Search...',
            signup: 'Sign up',
            herotitle: 'Our Food site makes it easy to find local food',
            herodescription:
                'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
            register: 'Register',
            ordernow: 'Order Now',
            features: 'Features',
            featuresdesc:
                'Discover the key features that make our product stand out. From innovative design and cutting-edge technology to user-friendly functionality, each feature is crafted to enhance your experience and deliver exceptional performance.',
            discountvoucher: 'Discount Voucher',
            freshfood: 'Fresh healthy Food',
            homedelivery: 'Fast Home Delivery',
            featurescarddesc:
                'This delicious dish is made with fresh ingredients and will amaze you with its taste.',
            homemenuone: 'Menu That Always Make You Fall In Love',
            homemenutwo: 'Yummy Always Papa John’s Pizza. Agree?',
            homemenuthree: 'Do You Like French Fries? Mmm...',
            homemenupr1:
                "You'll love our delicious selections! Each flavor is crafted to surprise you with its perfect freshness and taste. Order now and experience this unforgettable taste sensation. It's the perfect treat to share with your loved ones!",
            homemenupr2:
                "You'll love our delicious selections! Each flavor is crafted to surprise you with its perfect freshness and taste.",
            ourpopularfoods: 'Our Popular Foods',
            newfoods: 'New Foods',
            newfoodspr:
                'From classic favorites to unique specialties, our popular foods are loved by many. ',
            dubblechees: 'Dubble Cheeseburger',
            twistermenu: 'Twister Menu',
            menudesc:
                'Each of our dishes is crafted to deliver exceptional taste and satisfaction.',
            discoveryrest: 'Discover Restaurants Near You',
            explorenow: 'Explore Now',
            //FOOTER

            popular: 'Popular',
            programming: 'Programming',
            booksforchildren: 'Books for children',
            psychology: 'Psychology',
            business: 'Business',
            cash: 'Cash',
            deliverylink: 'Delivery',
            payment: 'Payment',
            aboutthestore: 'About the store',
            help: 'Help',
            contacts: 'Contacts',
            purchasereturns: 'Purchase returns',
            buyerhelp: 'Buyer help',
            copyright:
                'All rights reserved © 2003-2022 Foody TERMS OF USE | Privacy Policy',

            // ABOUT

            aboutdesclarge:
                "We are a food platform dedicated to bringing you the highest quality local and fresh food products. Our goal is to satisfy every customer by meeting their culinary desires. Our dishes stand out for their flavor and freshness, and we strive to provide the best service with every order. Our team is committed to paying attention to every detail and prioritizing our customers' needs. Get to know us, explore our wide menu, and enjoy an exceptional dining experience!",
            aboutdescsmall:
                'We are a food platform dedicated to bringing you the highest quality local and fresh food products. Our goal is to satisfy every customer by meeting their culinary desires.',

            // HOW IT WORKS

            howitworksdesc:
                'Delivery may be extended during sale periods. Please refer to the checkout page for an updated estimate for your location. Kindly note that once you have placed an order, it is no longer possible to modify your order. Taxes and duties are included in all product prices.It is possible to place an order with shipment to a different address than your home or billing address when paying with a credit card. Please note that Klarna payments require that your order is shipped to your registered home address.',

            // FAQ

            faqtitle: 'F.A.Q',
            faqquestion1: 'How to contact with Customer Service?',
            faqquestion2:
                'App installation failed, how to update system information?',
            faqquestion3: 'Website response taking time, how to improve?',
            faqquestion4: 'How do I create an account?',
            faqquestion5: 'How can I reset my password?',

            faqanswer1:
                'Our Customer Experience Team is available 7 days a week and we offer 2 ways to get in contact: Email and Chat. We try to reply quickly, so you need not wait too long for a response!',
            faqanswer2:
                'Ensure your system meets the app`s requirements and update your operating system and drivers. Check the app`s documentation for any specific needs. Try reinstalling the app after these updates.',
            faqanswer3:
                'Optimize images and scripts, use a content delivery network (CDN), and implement caching strategies. These steps reduce load times and improve performance. Also, consider optimizing your database queries.',
            faqanswer4:
                'Click "Sign Up" on the homepage and fill out the required fields, including your name, email, and password. Confirm your email by clicking the link sent to your inbox. Follow any additional steps to complete the setup.',
            faqanswer5:
                "Click on the 'Forgot Password' link on the login page. Enter your registered email address, and you will receive a link to reset your password. Follow the instructions in the email to create a new password.",

            // LOGIN REGISTER
            login: 'Login',
            loginbutton: 'Log In',
            username: 'Username',
            password: 'Password',
            placeholderusername: 'username',
            placeholderpassword: 'password',
            fullname: 'Full name',
            fullnameplaceholder: 'fullname',
            email: 'Email',
            emailplaceholder: 'user@mail.ru',

            // PROFILE
            profile: 'Profile',
            upload: 'Upload',
            contact: 'Contact',
            address: 'Address',
            baku: 'Baku',
            azerbaijan: 'Azerbaijan',
            save: 'Save',
            yourbasket: 'Your Basket',
            items: 'items',
            checkedtext: 'Your order has been received',
            yourorders: 'Your Orders',
            time: 'Time',
            deliveryaddress: 'Delivery Address',
            paymentmethod: 'Payment Method',
            amount: 'Amount',
            perpage: 'Rows per page',
            show: 'Show',
            delete: 'Delete',
            productdetails: 'Product Details',
            image: 'Image',
            name: 'Name',
            price: 'Price',
            count: 'Count',
            checkout: 'Checkout',
            logout: 'Logout',

            // Restaurants

            cuisine: 'Cuisine',
            goback: 'Go Back',
            from: 'From',
            delivery: 'Delivery',
            products: 'Products',
            emptybasket: 'Basket Empty',
        },
    },
};

i18n.use(initReactI18next).init({
    lng: 'en',
    resources,
});

export default i18n;
