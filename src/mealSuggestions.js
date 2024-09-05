const mealSuggestions = {
  breakfast: [
    { name: "Phở bò (1 tô)", calories: 350 },
    { name: "Bánh mì ốp la (1 ổ)", calories: 250 },
    { name: "Cháo lòng (1 bát)", calories: 270 },
    { name: "Bún chả (1 tô nhỏ)", calories: 320 },
    { name: "Bánh cuốn (1 đĩa)", calories: 250 },
    { name: "Xôi đậu xanh (1 bát)", calories: 300 },
    { name: "Bánh xèo (1 cái nhỏ)", calories: 200 },
    { name: "Sữa đậu nành (1 cốc)", calories: 100 },
    { name: "Bánh bao (1 cái)", calories: 150 },
    { name: "Bánh chưng (1 miếng nhỏ)", calories: 200 },
    { name: "Bánh mì thịt nướng (1 ổ)", calories: 300 },
    { name: "Bánh tôm (3 cái)", calories: 250 },
    { name: "Bánh bèo (1 đĩa nhỏ)", calories: 180 },
    { name: "Bánh khọt (4 cái nhỏ)", calories: 220 },
    { name: "Cháo cá (1 bát)", calories: 260 },
    { name: "Bánh ít trần (2 cái)", calories: 220 },
    { name: "Bánh chưng (1 miếng vừa)", calories: 350 },
    { name: "Bún mọc (1 tô)", calories: 300 }, // Added
    { name: "Xôi gấc (1 bát)", calories: 320 }, // Added
  ],

  lunch: [
    { name: "Cơm gà (1 đĩa)", calories: 500 },
    { name: "Bún thịt nướng (1 tô)", calories: 400 },
    { name: "Cơm sườn (1 đĩa)", calories: 550 },
    { name: "Bánh xèo (2 cái)", calories: 400 },
    { name: "Bún bò Huế (1 tô)", calories: 500 },
    { name: "Canh chua cá (1 bát)", calories: 250 },
    { name: "Cơm tấm (1 đĩa)", calories: 600 },
    { name: "Gỏi cuốn (2 cuốn)", calories: 200 },
    { name: "Mì Quảng (1 tô)", calories: 450 },
    { name: "Lẩu thập cẩm (1 phần)", calories: 600 },
    { name: "Cơm bò lúc lắc (1 đĩa)", calories: 550 },
    { name: "Cơm xào (1 đĩa)", calories: 500 },
    { name: "Gà xào sả ớt (1 phần)", calories: 400 },
    { name: "Bún mắm (1 tô)", calories: 500 },
    { name: "Cơm gà xối mỡ (1 đĩa)", calories: 550 },
    { name: "Cơm hến (1 đĩa)", calories: 450 },
    { name: "Bún riêu (1 tô)", calories: 500 },
    { name: "Cơm hải sản (1 đĩa)", calories: 550 }, // Added
    { name: "Chả cá Hà Nội (1 phần)", calories: 450 }, // Added
  ],

  dinner: [
    { name: "Cá kho tộ (1 phần)", calories: 300 },
    { name: "Thịt kho tàu (1 phần)", calories: 350 },
    { name: "Gà nướng (1 phần)", calories: 400 },
    { name: "Bún mắm (1 tô)", calories: 500 },
    { name: "Cơm chiên (1 đĩa)", calories: 450 },
    { name: "Bò xào (1 phần)", calories: 350 },
    { name: "Lẩu hải sản (1 phần)", calories: 600 },
    { name: "Canh bí đỏ (1 bát)", calories: 150 },
    { name: "Mực xào (1 phần)", calories: 250 },
    { name: "Cơm cá (1 đĩa)", calories: 400 },
    { name: "Sườn nướng (1 phần)", calories: 350 },
    { name: "Chả cá Lã Vọng (1 phần)", calories: 400 },
    { name: "Mì xào (1 đĩa)", calories: 450 },
    { name: "Cơm gà chiên (1 đĩa)", calories: 500 },
    { name: "Đậu hũ xào rau củ (1 phần)", calories: 250 },
    { name: "Gà kho gừng (1 phần)", calories: 350 },
    { name: "Canh hến (1 bát)", calories: 200 },
    { name: "Cá chiên mắm tỏi (1 phần)", calories: 350 }, // Added
    { name: "Bò nhúng dấm (1 phần)", calories: 400 }, // Added
  ],

  snacks: [
    { name: "Chả giò (2 cái)", calories: 200 },
    { name: "Bánh đúc (1 miếng)", calories: 150 },
    { name: "Xôi vò (1 phần nhỏ)", calories: 180 },
    { name: "Trái cây tươi (1 đĩa)", calories: 100 },
    { name: "Bánh rán (2 cái nhỏ)", calories: 250 },
    { name: "Rau câu (1 miếng)", calories: 120 },
    { name: "Hạt điều rang (1/4 cốc)", calories: 200 },
    { name: "Chè đậu xanh (1 bát nhỏ)", calories: 180 },
    { name: "Bánh khoai mì (1 miếng nhỏ)", calories: 200 },
    { name: "Sữa chua (1 hũ nhỏ)", calories: 120 },
    { name: "Bánh gối (2 cái nhỏ)", calories: 250 },
    { name: "Đậu phộng rang (1/4 cốc)", calories: 180 },
    { name: "Bánh trôi nước (2 viên)", calories: 150 },
    { name: "Hạt hướng dương (1/4 cốc)", calories: 200 },
    { name: "Bánh ít (2 cái)", calories: 200 },
    { name: "Chè thưng (1 bát)", calories: 200 },
    { name: "Bánh cứng (1 cái nhỏ)", calories: 150 },
    { name: "Bắp rang bơ (1 túi nhỏ)", calories: 180 }, // Added
    { name: "Bánh bột lọc (2 cái)", calories: 120 }, // Added
  ],
};

export default mealSuggestions;
