export default () => {
    const elements = document.querySelectorAll('.js-map');


    elements.forEach( (element) => {
        ymaps.ready(initContactsMap);

        function initContactsMap() {
            const mapData = window.mapData ?? null;
            if (!mapData) return;

            const isMobile = window.matchMedia('(max-width: 992px)').matches;
            const zoom = window.mapZoom ?? 14,

                center = window.mapCenter,

                mapInstance = new ymaps.Map(element, {
                    center: center,
                    zoom: zoom,
                    controls: []
                }),

                MainMarkerLayout = ymaps.templateLayoutFactory.createClass([
                    '<div class="ya-main-placemark">',
                    '</div>'
                ].join('')),

                MainMarkerLayoutGrey = ymaps.templateLayoutFactory.createClass([
                    '<div class="ya-main-placemark ya-main-placemark--grey">',
                    '</div>'
                ].join('')),

                ZoomLayout = ymaps.templateLayoutFactory.createClass(
                    "<div class='zoom-btns'>" +
                        "<div id='zoom-in' class='zoom-in-btn'><i class='icon-plus'></i></div>" +
                        "<div id='zoom-out' class='zoom-in-btn'><i class='icon-minus'></i></div>" +
                    "</div>", {

                    // Переопределяем методы макета, чтобы выполнять дополнительные действия
                    // при построении и очистке макета.
                    build: function () {
                        // Вызываем родительский метод build.
                        ZoomLayout.superclass.build.call(this);

                        // Привязываем функции-обработчики к контексту и сохраняем ссылки
                        // на них, чтобы потом отписаться от событий.
                        this.zoomInCallback = ymaps.util.bind(this.zoomIn, this);
                        this.zoomOutCallback = ymaps.util.bind(this.zoomOut, this);

                        // Начинаем слушать клики на кнопках макета.
                        $('#zoom-in').bind('click', this.zoomInCallback);
                        $('#zoom-out').bind('click', this.zoomOutCallback);
                    },

                    clear: function () {
                        // Снимаем обработчики кликов.
                        $('#zoom-in').unbind('click', this.zoomInCallback);
                        $('#zoom-out').unbind('click', this.zoomOutCallback);

                        // Вызываем родительский метод clear.
                        ZoomLayout.superclass.clear.call(this);
                    },

                    zoomIn: function () {
                        var map = this.getData().control.getMap();
                        map.setZoom(map.getZoom() + 1, {checkZoomRange: true});
                    },

                    zoomOut: function () {
                        var map = this.getData().control.getMap();
                        map.setZoom(map.getZoom() - 1, {checkZoomRange: true});
                    }
                }),
                // настройка кнопок зума:
                zoomControl = new ymaps.control.ZoomControl({
                    options: {
                        position: {
                            top: 60,
                            left: 60,
                        },
                        layout: ZoomLayout
                    }
                }),

                objectManager = new ymaps.ObjectManager({
                    clusterize: false,
                    clusterHasBalloon: false,
                    geoObjectOpenBalloonOnClick: true,
                    visible: false
                });

            mapInstance.geoObjects.add(objectManager);
            mapInstance.behaviors.disable('scrollZoom');
            mapInstance.controls.add(zoomControl);

            if (isMobile) {
                mapInstance.behaviors.disable('drag');
                mapInstance.behaviors.enable('MultiTouch');
            }

            const renderPlaces = () => {
                mapData.forEach(function(item, index) {
                    var objectToAdd = {
                        id: index,
                        type: 'Feature',
                        geometry: {
                            type: 'Point',
                            coordinates: item.coords,
                        },
                        options: {
                            iconLayout: item.greyIcon ? MainMarkerLayoutGrey : MainMarkerLayout,
                            iconShape: {
                                type: 'Circle',
                                coordinates: [0, 0],
                                radius: 30
                            },
                        },
                        properties: {

                        }
                    };

                    objectManager.add(objectToAdd);
                });
            }

            renderPlaces();

            objectManager.objects.events.add('click', function (e) {
                const objectId = e.get('objectId');
                const object = objectManager.objects.getById(objectId);

                mapInstance.panTo(object.geometry.coordinates, {useMapMargin: false});
            });
        }
    });
}
