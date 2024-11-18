class Proizvod {
    constructor(id, naziv, cijena, velicine, opis, slike,boje,karakteristike) {
    this.id = id;
    this.naziv = naziv;
    this.cijena = cijena;
    this.velicine = velicine;
    this.opis = opis;
    this.slike = slike;
    this.boje=boje;
    this.karakteristike=karakteristike;

    }
    }
    const proizvodi = [
    new Proizvod(1, 'Obična crna majica', 80, ['XS', 'S', 'M', 'L'],"majca od 100% pamuka",[,
        "https://kerrits.com/cdn/shop/files/ICe-Fil-Long-Sleeve-Black_57b36ad5-151a-4571-9f8a-0c730ccddf29.jpg?v=1704400320","https://www.willowequestrian.com/cdn/shop/products/image_1cc0452e-974f-4a8b-aa6a-c108e74960b7.jpg?v=1720567334&width=960",
        "https://media.fundis.net/media/image/32/b3/97/equestrian-stockholm_damenshirt_black-gold.jpg","https://kerrits.com/cdn/shop/files/ICe-Fil-Long-Sleeve-Black_57b36ad5-151a-4571-9f8a-0c730ccddf29.jpg?v=1704400320s"],["black","purple","white"],{
            materijal: 'Pamuk',
            težina: '200g',
            održavanje: 'Pranje na 30°C, ne koristiti sušilicu.',
          }), 
    new Proizvod(2, "Levi's 501 traperice", 110, ['S', 'M', 'L'],"visoke i rastezljive",["https://lsco.scene7.com/is/image/lsco/005010134-alt1-pdp-ld?$qv_desktop$",
        "https://lsco.scene7.com/is/image/lsco/596920033-alt2-pdp-lse?fmt=jpeg&qlt=70&resMode=sharp2&fit=crop,1&op_usm=0.6,0.6,8&wid=2000&hei=1840","https://lscoecomm.scene7.com/is/image/lscoecomm/STRAIGHT%20JEANS-1?fmt=jpeg&qlt=70&resMode=sharp2&fit=crop,1&op_usm=0.6,0.6,8&wid=1200&hei=1500"
        ,"https://www.realmenrealstyle.com/wp-content/uploads/2024/01/Levis-501-Jeans-%E2%80%93-A-Mans-Style-Guide.jpg"
    ],["black","blue"],{
        materijal: 'Poliester',
        težina: '600g',
        održavanje: 'Ručno pranje, ne glačati.',
      }),
    new Proizvod(3, 'Zimska kapa', 40, 'onesize',"vunena kapa ",["https://cdn.prod.website-files.com/5b36a2c9df51e7d9e3f9291f/5c1a7eb9f264d668694c55e2_sVE5QwaxmLjB5W7SAcZvxEDozDGBhFinqKrDv8wXO7SbOlZWcicP0ThwLqAi13enlgh9o_v1sNuSBo6e5UITDzZYlfHmxDHKZUY799aHbAhuHSTScXGnAo7F92487-mzqbDSxZk_.jpeg",
        "https://m.media-amazon.com/images/I/71ZJVictizL._AC_SX679_.jpg","https://m.media-amazon.com/images/I/81F5PbgsNoS._AC_UY1000_.jpg","https://m.media-amazon.com/images/I/9160FBtxGoL._AC_SY741_.jpg"
    ]),
    new Proizvod(4, 'Čarape Adidas', 20, ['34-36', '37-39', '40-42'],"nove sportske čarape",["https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/51ac8b45cfc449c8b679ac0601894e94_9366/Trefoil_Crew_Socks_6_Pairs_White_CH8396_03_standard.jpg",
        "https://images.asos-media.com/products/adidas-originals-6-pack-crew-socks-in-black/202958850-1-black?$n_640w$&wid=513&fit=constrain",
        "https://pictures-ghana.jijistatic.net/30565958_NjIwLTY0Ni0wYTdmYTQwMjIx.webp","https://assets.adidas.com/images/w_600,f_auto,q_auto/69e82a1f3d10467e86f2af3a00b98449_9366/Crew_Socks_3_Pairs_Blue_IB9300_42_detail.jpg"]),
    new Proizvod(5, 'Tenisice Nike', 200, ['38', '39', '40', '41', '42', '43', '44', '45'],"tenisice za trčanje",["https://static.nike.com/a/images/f_auto/dpr_3.0,cs_srgb/w_363,c_limit/83e721fb-4f3f-44d5-ae11-5ef19006fd93/best-running-shoes-for-walking-by-nike.jpg"
        ,"https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/aa151331-0d75-4744-8e47-cfb7ec0fdfb0/NIKE+ZOOMX+INVINCIBLE+RUN+FK3.png",
        "https://yesoriginal.com.ua/image/cache/catalog/cover/DR2615-105-1215x1280.webp","https://cdn.runrepeat.com/storage/gallery/buying_guide_primary/1485/1485-best-nike-road-running-shoes-16425295-main.jpg"])
    ];
    export { proizvodi, Proizvod };