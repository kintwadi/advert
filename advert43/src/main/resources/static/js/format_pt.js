Application = {
    name: "Advert43",
    favCon: {
        icon: "img/icon.png"
    },
    UserContainer: {
        User: {
            id: "1",
            name: "The Great Awakening",
            nameCssId:"user-name-id",
            image: "img/live.jpg",
            link: "#",
            imageCssId: "user-link-img",
            profile:"Perfil",
            profileCssId:"link-id",
            profileLink: "profile"
            
            
        }
    }
    ,
    HeaderContainer: {
        Logo: {
            icon: "img/logo.png",
            iconLink: "#",
            cssClass: "logoImg",
            cssId: "logoImg"
        },
        Menu: [
        	
        	Home = {
                    text: "Home",
                    link: "#",
                    cssClass: "nav-link",
                    cssId: "home"

                },
            AboutUS = {
                text: "Sobre nós",
                link: "#",
                cssClass: "nav-link",
                cssId: "about-us"

            },
            ContactUS = {
                text: "Contacto",
                link: "#",
                cssClass: "nav-link",
                cssId: "contact-us"

            },
            Login = {
                text: "Acesso",
                link: "#",
                cssClass: "nav-link",
                cssId: "login",
                header: "Acesso",
                emailPlaceHolder: "Email",
                passwordPlaceHolder:"Senha",
                submitLabel: "Iniciar Sessão",
                remember:"Lembra - me",
                question:"Esqueceu a conta?",
                answear: "Clique aqui para redefini-lo.",
                newQuestion:"Não tens uma conta?",
                newAnswear:"Regista-te.",
                error: "Email or Senha Inválido"
                
                	

            },
            SignUp = {
                text: "Cadastre-se",
                link: "#",
                cssClass: "nav-link",
                cssId: "sign-up"

            }
        ],

        Locale: {
            contry: ['Angola', 'UK'],
            language: [
            	
               PT = {
                        text: "PT",
                        link: "#",
                        countryIconFlag: "flag-icon-pt"
                    },
                EN = {
                    text: "DE",
                    link: "#",
                    countryIconFlag: "flag-icon-de"
                }, DE = {
                    text: "EN",
                    link: "#",
                    countryIconFlag: "flag-icon-gb-eng"
                }
            ],
            cssClass: "nav-item dropdown locale",
            cssId: "locale"
        },
    },
    SearchContainer: {
        Category: {
            text: "Categoria",
            categories: ['Carros', 'Bicicletas', 'Scooters', '...'],
            link: "#",
            cssClass: "category",
            cssId: "category"
        },
        Location: {
            text: "Localiza&#231;&#227;o",
            locations: ['Carros', 'Bicicletas', 'Scooters', '...'],
            link: "#",
            cssClass: "location",
            cssId: "location"
        },
        Search: {
            text: "",
            icon: "fa fa-search",
            link: "#",
            cssClass: "searchInput",
            cssId: "searchInput"
        },
        Button: {
            text: "Buscar",
            icon: "",
            link: "#",
            cssClass: "button",
            cssId: "button"
        }

    },
    AdContainer: {
        cssClass: "adContainer",
        cssId: "",
        image: "img/news_card.jpg",
        link: "#"
    },
    CategoryContainer: {
        text: "Categorias",
        categories:[
            Category1 = {
                text: "Cars",
                link:"#",
                Entries:
                [
                    CategoryItem1={
                        text: "i10",
                        link: "#",
                        cssClass: "i10",
                        cssId: "i10"
                    },
                    CategoryItem1 = {
                        text: "i20",
                        link: "#",
                        cssClass: "i20",
                        cssId: "i20"
                    }
                ],
                cssClass: "cars",
                cssId: "cars"
            },
            Category2 = {
                text: "Bike",
                link:"#",
                Entries:
                [
                    CategoryItem1={
                        text: "rt50",
                        link: "#",
                        cssClass: "rt50",
                        cssId: "rt50"
                    },
                    CategoryItem1={
                        text: "renock",
                        link: "#",
                        cssClass: "renock",
                        cssId: "renock"
                    }
                ],
                cssClass: "bike",
                cssId: "bike"
            }       
        ],
        cssClass: "",
        cssId: "treeview"
    },
    CategoriesContainer: {
        cssId:"categorieContainer",
        list: [
            cars = {
                text: "Carros",
                types: [
                    {
                        header: "I10 yundai F2",
                        description: "Get the Illusion of Fuller Lashes by “Mascng.”",
                        image: "img/whatNews1.jpg",
                        Footer: {
                            price: "$ 5000",
                            link: "#"
                        }
                    },
                    {
                        header: "I10 yundai Q11",
                        description: "Get the Illusion of Fuller Lashes by “Mascng.”",
                        image: "img/whatNews1.jpg",
                        Footer: {
                            price: "$ 5000",
                            link: "#"
                        }
                    },
                    {
                        header: "I10 yundai Q1",
                        description: "Get the Illusion of Fuller Lashes by “Mascng.”",
                        image: "img/whatNews1.jpg",
                        Footer: {
                            price: "$ 5000",
                            link: "#"
                        }
                    },{
                        header: "I10 yundai Q12",
                        description: "Get the Illusion of Fuller Lashes by “Mascng.”",
                        image: "img/whatNews1.jpg",
                        Footer: {
                            price: "$ 5000",
                            link: "#"
                        }
                    },{
                        header: "I10 yundai A12",
                        description: "Get the Illusion of Fuller Lashes by “Mascng.”",
                        image: "img/whatNews1.jpg",
                        Footer: {
                            price: "$ 5000",
                            link: "#"
                        }
                    },
                    {
                        header: "I20 yundai A1",
                        description: "Get the Illusion of Fuller Lashes by “Mascng.”",
                        image: "img/whatNews1.jpg",
                        Footer: {
                            price: "$ 5000",
                            link: "#"
                        }
                    },
                    {
                        header: "I20 yundai F1",
                        description: "Get the Illusion of Fuller Lashes by “Mabiala.”",
                        image: "img/whatNews1.jpg",
                        Footer: {
                            price: "$ 5000",
                            link: "#"
                        }
                    }
                ]
            },
            bike = {
                text: "Bicicletas",
                types: [
                    {
                        header: "Rt50 bike j2",
                        description: "Get the Illusion of Fuller Lashes by “Mascng.”",
                        image: "img/whatNews1.jpg",
                        Footer: {
                            price: "$ 5000",
                            link: "#"
                        }
                    },
                    {
                        header: "Rt50 bike v2",
                        description: "Get the Illusion of Fuller Lashes by “Mascng.”",
                        image: "img/whatNews1.jpg",
                        Footer: {
                            price: "$ 5000",
                            link: "#"
                        }
                    },
                    {
                        header: "Rt50 bike u2",
                        description: "Get the Illusion of Fuller Lashes by “Mascng.”",
                        image: "img/whatNews1.jpg",
                        Footer: {
                            price: "$ 5000",
                            link: "#"
                        }
                    },
                    {
                        header: "Renock bike j2",
                        description: "Get the Illusion of Fuller Lashes by “Mascng.”",
                        image: "img/whatNews1.jpg",
                        Footer: {
                            price: "$ 5000",
                            link: "#"
                        }
                    },
                    {
                        header: "Renock bike OQ",
                        description: "Get the Illusion of Fuller Lashes by “Mabiala.”",
                        image: "img/whatNews1.jpg",
                        Footer: {
                            price: "$ 5000",
                            link: "#"
                        }
                    }
                ]
            }
        ],
        showMore: " Show more entries"
    },
    NewEntriesContainer: {
        text: "Novos an&#249;ncios",
        link: "#",
        cssClass: "newEntriesContainer",
        cssId: "newEntriesContainer",
        Entries: [
            Card1 = {
                header: "Get the Illusion",
                description: "Get the Illusion of Fuller Lashes by “Mascng.”",
                image: "img/whatNews1.jpg",
                Footer: {
                    price: "$ 5000",
                    link: "#"
                }
            },
            Card2 = {
                header: "Get the Illusion",
                description: "Get the Illusion of Fuller Lashes by “Mascng.”",
                image: "img/whatNews1.jpg",
                Footer: {
                    price: "$ 5000",
                    link: "#"
                }
            },
            Card3 = {
                header: "Get the Illusion",
                description: "Get the Illusion of Fuller Lashes by “Mascng.”",
                image: "img/whatNews1.jpg",
                Footer: {
                    price: "$ 5000",
                    link: "#"
                }
            },
            Card4 = {
                header: "Get the Illusion",
                description: "Get the Illusion of Fuller Lashes by “Mascng.”",
                image: "img/whatNews1.jpg",
                Footer: {
                    price: "$ 5000",
                    link: "#"
                }
            },
            Card5 = {
                header: "Get the Illusion",
                description: "Get the Illusion of Fuller Lashes by “Mabiala.”",
                image: "img/whatNews2.jpg",
                Footer: {
                    price: "$ 5000",
                    link: "#"
                }
            },
            Card6 = {
                header: "Get the Illusion",
                description: "Get the Illusion of Fuller Lashes by “Maloza.”",
                image: "img/whatNews2.jpg",
                Footer: {
                    price: "$ 5000",
                    link: "#"
                }
            },
            Card7 = {
                header: "Get the Illusion",
                description: "Get the Illusion of Fuller Lashes by “Mascng.”",
                image: "img/whatNews2.jpg",
                Footer: {
                    price: "$ 5000",
                    link: "#"
                }
            },
            Card8 = {
                header: "Get the Illusion",
                description: "Get the Illusion of Fuller Lashes by “Mascng.”",
                image: "img/whatNews1.jpg",
                Footer: {
                    price: "$ 5000",
                    link: "#"
                }
            }
        ],
        Control: {
            first: "First",
            previous: "Prev",
            counts: [1, 2],
            next: "Next",
            last: "Last"
        }
    },

    OldEntriesContainer: {
        text: "An&#249;nciados anteriormente",
        link: "#",
        cssClass: "oldEntriesContainer",
        cssId: "oldEntriesContainer",
        Entries: [
            Card1 = {
                header: "Get the Illusion",
                description: "Get the Illusion of Fuller Lashes by “Mascng.”",
                image: "img/whatNews1.jpg",
                Footer: {
                    price: "$ 5000",
                    link: "#"
                }
            },
            Card2 = {
                header: "Get the Illusion",
                description: "Get the Illusion of Fuller Lashes by “Mascng.”",
                image: "img/whatNews1.jpg",
                Footer: {
                    price: "$ 5000",
                    link: "#"
                }
            },
            Card3 = {
                header: "Get the Illusion",
                description: "Get the Illusion of Fuller Lashes by “Mascng.”",
                image: "img/whatNews1.jpg",
                Footer: {
                    price: "$ 5000",
                    link: "#"
                }
            },
            Card4 = {
                header: "Get the Illusion",
                description: "Get the Illusion of Fuller Lashes by “Mascng.”",
                image: "img/whatNews1.jpg",
                Footer: {
                    price: "$ 5000",
                    link: "#"
                }
            },
            Card5 = {
                header: "Get the Illusion",
                description: "Get the Illusion of Fuller Lashes by “Mabiala.”",
                image: "img/whatNews1.jpg",
                Footer: {
                    price: "$ 5000",
                    link: "#"
                }
            }
        ],
        showMore: " Mostrar mais"
    },
 // new code
    NewUser: {
        image: "img/user.png",
        name: "JOHN DOE",
        cellphone: "+244 999 999",
        activeSince: "02-04-2020",
        link: "#",
        imageCssId: "user-link-img",
        profile:"Configurações",
        profileCssId:"link-id",
        profileLink: "profile",
        cssNameId: "user-name-id"
       
    },
    AdvertisementContainer: {
        Advertisement: {
            image: "img/live.jpg",
            link: "#"
        }
    },
    Message: {
        text: "Message",
        filds: [
            "Name",
            "Phone",
            "Description"
        ],
        button: {
            text: "SEND"
        }
    },
    Links: {
        share: {
            text: "SHARE",
            link: "#"
        },
        follow: {
            text: "FOLLOW",
            link: "#"
        }
    },
    Slider: {
        title: "click to zoom-in",
        galery: [
            item1 = {
                img: "img/1.jpg"
            },
            item2 = {
                img: "img/2.jpg"
            },
            item3 = {
                img: "img/3.jpg"
            }
        ],
        Description:{
            title:"Description",
            text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus dolorem deserunt, vero libero cumque itaque? Repudiandae dicta libero in qui officia, saepe porro maiores possimus autem quasi, pariatur at recusandae!"
        }
    }, 
    CreateNewAd:{
        text:"CREATE NEW CARD",
        cssId:"newAd",
        cssClass:"newAd"

    },
  
   
    MessageViewContainer:{
        list:[
            {
                guest:{
                    img:"img/user.png",
                    text:"Hi"
                },
                me:{
                    img:"img/user.png",
                    text:"Hello dear, how are you"
                }
            },
            {
                guest:{
                    img:"img/user.png",
                    text:"i'm fine, and you"
                },
                me:{
                    img:"img/user.png",
                    text:""
                }
            }
        ],
        message_tip:"Type a message ....",
        button:"Send"
    },
    NewAdd:{
        title:"Create your card",
        editTitle:"Edit your card",
        uploadImage:"Upload Images",
        addType:{
            text:"Add type",
            offer:"I offer",
            loking:"I´m looking for"
        },
        titleOfAd:"Title",
        description:"Description",
        tips:{
            text:"Tips",
            placeholder:"You can add your card description as sutch ...."
        },
        price:"Price",
        negotiable:"Negotiable",
        toChange:"To change",
        toGiveAwey:"To give away",
        new:"New",
        used:"Used",
        categorization:{
            text:"Categorization",
            placeholder:"select",
            list:[
                "1",
                "2",
                "3"
            ]
        },
        subcategory:{
        text:"Subcategory",
            placeholder:"select",
            list:[
                "1",
                "2",
                "3"
            ]
            },
        zip:"Zip",
        province:{
            text:"Province",
            placeholder:"select",
            list:[
                "Luanda",
                "Benguela",
                "Huíge"
            ]
        },
        street:"Street",
        preference:"Preference or Geolocation",
        tips2:{
            text:"Tips",
            placeholder:"You can add your reference or google map geolocation as sutch ...."
        },
        phone:{
            text:"Celphone",
            visible:"Visible"
        },
        email:{
            text:"Email",
            visible:"Visible"
        },
        name:"Name",
        publishNow:"Publish now",
        finish:"Finish"
    }
    ,
    MyMessage:{
        text:"MESSAGE",
        cssId:"message",
        cssClass:"message",
        data:[
            {
                cardid:"1",
                name:"John Doe",
                img:"img/user.png",
                messageContent:"you mailed it"
            },
            {
                name:"Katy Molen",
                img:"img/user.png",
                messageContent:"you mailed it"
            },
            {
                name:"Carl Dogger",
                img:"img/user.png",
                messageContent:"you mailed it, but i just configure and now i can discuss this oportunatly and distiguish the offer!"
            },
            {
                name:"Mary Paty",
                img:"img/user.png",
                messageContent:"you mailed it"
            },
            {
                name:"Joseph Durth",
                img:"img/user.png",
                messageContent:"you mailed it"
            }
        ]
    },
    Publisher:{
        publishList:[
            // terá os publishs dos ads que virão do microservice e serão passados ao array listAds que está no render 
        ]
    },
    
    FooterContainer: {
        copyRight: "&copy; 2020",
        Private: {
            text: "POLÍTICA DE PRIVACIDADE",
            link: "login.html"
        },
        Terms: {
            text: "TERMOS DE USO",
            link: "logins.html"
        },
        Provider: {
            text: "FORNECIDO POR Q - SOFT TEAM",
            link: "loginss.html"
        }
    }
}

