// new code all
    
    // object Categories
    CategoriesContainer = {
        cssId: "categorieContainer",
        list: [
            cars = {
                text: "Cars",
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
                    }, {
                        header: "I10 yundai Q12",
                        description: "Get the Illusion of Fuller Lashes by “Mascng.”",
                        image: "img/whatNews1.jpg",
                        Footer: {
                            price: "$ 5000",
                            link: "#"
                        }
                    }, {
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
                text: "Bikes",
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
                    }
                ]
            }
        ],
        showMore: " Show more entries"
    }
    // user render the CategoriesContainer
    this.CategoriesContainer = function () {
        //this.clean_the_row();
        render.CategoriesContainerRender(CategoriesContainer.list[1].types,"Bikes");
    };
    this.clean_the_row = function () {
        $('#old-card').remove();
        $("#new-card").remove();
        $(".slideContent").remove();
        $('#desc').remove();
        $(".row .col-md-5").remove();
        $('.oldEntriesContainer').remove();
        $(".newEntriesContainer").remove();
    }
    // user render the CategoriesContainerRender
    this.CategoriesContainerRender = function (list, title) {
        // variables thst store the HTML format tag
        var categoriesContainer = $('<div>');
        categoriesContainer.addClass(app.CategoriesContainer.cssId);
        var panel = $('<div class="panel panel-default">');
        var panelHeading = $('<div class="panel-heading">');
        // changed
        this.clean_the_row();
        var _size = list.length;
        if (_size == 0) {
            return;
        }
        var count=0;
        this.clean_the_row();
        var textValue = $("<span>");
        // link to categoriesContainer (init update)
        var linkValue = $("<a>");
        linkValue.text(title);
        textValue.append(linkValue);
        // end update
        panelHeading.append(textValue);
        panel.append(panelHeading);
        var oldCard = $('<div id="category-card">')
        var row = $('<div class="row">');
        row.attr("id", app.CategoriesContainer.cssId);
        categoriesContainer.append(panel);
        $("#middle_colapse").append(categoriesContainer);
        for (let index = 0; index < _size && index < 4; index++) {
            const element = list[index];
            var cardColumn = $('<div class="col-md-3 old-card">');
            var singleBotton = $('<div class="single-bottom mb-35">');
            var image = $('<img>');
            image.attr("src", element.image);
            singleBotton.append(image);
            var bottonCap = $('<div class="trend-bottom-cap">');
            bottonCap.append($('<h6>').text(element.header));
            bottonCap.append($('<span>').text(element.description));
            bottonCap.append($('<hr>'));
            var footer = $('<a>');
            footer.append($('<i>').html(element.Footer.price));
            footer.attr("href", element.Footer.link);
            bottonCap.append(footer);
            singleBotton.append(bottonCap);
            cardColumn.append(singleBotton);
            row.append(cardColumn);
            count++;
        }
        
        var showMore = $('<span class="show-more fa fa-plus-circle" id="show-more">');
        showMoreValue = $('<i>');
        showMoreValue.text(app.CategoriesContainer.showMore);
        showMore.append(showMoreValue);
        showMore.click(function(){
            render.showMoreCategoriesEventHandler(list);
        });
        oldCard.append(row);
        if (count <= 4) {
            showMore.hide();
        } else {
            showMore.show();
        }
        oldCard.append(showMore);
        $("#middle_colapse").append(oldCard);
        console.log(oldCard);
        console.log($("#middle_colapse"));

    };

    this.showMoreCategoriesEventHandler = function(list) {
        var row = $('#' + app.CategoriesContainer.cssId);
        //alert("clicou");
        //alert(currentCategory);
        var _size = list.length;
        row.empty();
        if (showMoreState) {
            for (let index = 0; index < _size; index++) {
                const element = list[index];
                var cardColumn = $('<div class="col-md-3 old-card">');
                var singleBotton = $('<div class="single-bottom mb-35">');
                var image = $('<img>');
                image.attr("src", element.image);
                singleBotton.append(image);
                var bottonCap = $('<div class="trend-bottom-cap">');
                bottonCap.append($('<h6>').text(element.header));
                bottonCap.append($('<span>').text(element.description));
                bottonCap.append($('<hr>'));
                var footer = $('<a>');
                footer.append($('<i>').html(element.Footer.price));
                footer.attr("href", element.Footer.link);
                bottonCap.append(footer);
                singleBotton.append(bottonCap);
                cardColumn.append(singleBotton);
                row.append(cardColumn);
                //console.log(row);
            }
            $('#show-more').text("back to default (hide)");
            $('#show-more').attr("class", " show-more fa fa-mines-circle");
            showMoreState = false;
        } else {
            for (let index = 0; index < _size && index < 4; index++) {
                const element = list[index];
                var cardColumn = $('<div class="col-md-3 old-card">');
                var singleBotton = $('<div class="single-bottom mb-35">');
                var image = $('<img>');
                image.attr("src", element.image);
                singleBotton.append(image);
                var bottonCap = $('<div class="trend-bottom-cap">');
                bottonCap.append($('<h6>').text(element.header));
                bottonCap.append($('<span>').text(element.description));
                bottonCap.append($('<hr>'));
                var footer = $('<a>');
                footer.append($('<i>').html(element.Footer.price));
                footer.attr("href", element.Footer.link);
                bottonCap.append(footer);
                singleBotton.append(bottonCap);
                cardColumn.append(singleBotton);
                row.append(cardColumn);
                //console.log(row);
            }
            showMoreValue = $('.show-more').text(app.CategoriesContainer.showMore);
            $('.show-more').addClass("fa fa-mines-circle");
            showMoreState = true;
        }
    };