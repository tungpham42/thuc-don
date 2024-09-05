import React, { useState } from "react";
import { Container, Form, Button, Row, Col, Card } from "react-bootstrap";

const CaloriesCalculator = () => {
  const [caloriesNeeded, setCaloriesNeeded] = useState(null);
  const [mealPlan, setMealPlan] = useState({});

  const calculateCalories = (event) => {
    event.preventDefault();
    const form = event.target;
    const weight = parseFloat(form.elements.weight.value);
    const height = parseFloat(form.elements.height.value);
    const age = parseFloat(form.elements.age.value);
    const activityLevel = parseFloat(form.elements.activityLevel.value);
    const gender = form.elements.gender.value;

    // BMR calculation formula based on gender
    let BMR;
    if (gender === "male") {
      BMR = 10 * weight + 6.25 * height - 5 * age + 5;
    } else if (gender === "female") {
      BMR = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    const totalCalories = Math.round(BMR * activityLevel);

    setCaloriesNeeded(totalCalories);
    generateMealPlan(totalCalories);
  };

  const generateMealPlan = (calories) => {
    // Calculate calorie limits for each meal category
    const calorieLimit = calories / 4; // Distribute calories roughly equally

    const plan = {
      breakfast: getMealsWithinLimit(breakfastSuggestions, calorieLimit),
      lunch: getMealsWithinLimit(lunchSuggestions, calorieLimit),
      dinner: getMealsWithinLimit(dinnerSuggestions, calorieLimit),
      snacks: getMealsWithinLimit(snackSuggestions, calorieLimit),
    };
    setMealPlan(plan);
  };

  const getMealsWithinLimit = (items, calorieLimit) => {
    let totalCalories = 0;
    let selectedMeals = [];

    // Shuffle and select meals until calorie limit is reached
    const shuffled = [...items].sort(() => 0.5 - Math.random());
    for (const item of shuffled) {
      if (totalCalories + item.calories <= calorieLimit) {
        selectedMeals.push(item);
        totalCalories += item.calories;
      }
    }

    return selectedMeals;
  };

  const breakfastSuggestions = [
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
    { name: "Bánh ít trần (2 cái)", calories: 220 }, // Added
    { name: "Bánh chưng (1 miếng vừa)", calories: 350 }, // Added
  ];

  const lunchSuggestions = [
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
    { name: "Cơm hến (1 đĩa)", calories: 450 }, // Added
    { name: "Bún riêu (1 tô)", calories: 500 }, // Added
  ];

  const dinnerSuggestions = [
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
    { name: "Gà kho gừng (1 phần)", calories: 350 }, // Added
    { name: "Canh hến (1 bát)", calories: 200 }, // Added
  ];

  const snackSuggestions = [
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
    { name: "Chè thưng (1 bát)", calories: 200 }, // Added
    { name: "Bánh cứng (1 cái nhỏ)", calories: 150 }, // Added
  ];

  return (
    <Container className="mt-4">
      <h1>Gợi ý thực đơn hàng ngày</h1>
      <Form onSubmit={calculateCalories}>
        <Row>
          <Col md={4}>
            <Form.Group>
              <Form.Label>Cân nặng (kg)</Form.Label>
              <Form.Control type="number" name="weight" min="0" required />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group>
              <Form.Label>Chiều cao (cm)</Form.Label>
              <Form.Control type="number" name="height" min="0" required />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group>
              <Form.Label>Tuổi</Form.Label>
              <Form.Control type="number" name="age" min="0" required />
            </Form.Group>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col md={6}>
            <Form.Group>
              <Form.Label>Mức độ hoạt động</Form.Label>
              <Form.Select name="activityLevel" required>
                <option value="1.2">Ít hoặc không hoạt động</option>
                <option value="1.375">Hoạt động nhẹ (1-3 ngày/tuần)</option>
                <option value="1.55">Hoạt động vừa phải (3-5 ngày/tuần)</option>
                <option value="1.725">Hoạt động cao (6-7 ngày/tuần)</option>
                <option value="1.9">
                  Hoạt động rất cao (2 lần/ngày hoặc công việc nặng)
                </option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group>
              <Form.Label>Giới tính</Form.Label>
              <Form.Select name="gender" required>
                <option value="male">Nam</option>
                <option value="female">Nữ</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>
        <Button className="mt-3" type="submit">
          Gợi ý
        </Button>
      </Form>

      {caloriesNeeded && (
        <div className="mt-4">
          <h3>Nhu Cầu Calo Hàng Ngày Của Bạn: {caloriesNeeded} calo</h3>
        </div>
      )}

      {mealPlan && (
        <div className="mt-4">
          <h4>Gợi ý kế hoạch bữa ăn:</h4>
          <Row>
            <Col md={6}>
              <Card className="mb-3">
                <Card.Header>Bữa sáng</Card.Header>
                <Card.Body>
                  <ol>
                    {mealPlan.breakfast &&
                      mealPlan.breakfast.map((item, index) => (
                        <li key={index}>
                          {item.name} - {item.calories} calo
                        </li>
                      ))}
                  </ol>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="mb-3">
                <Card.Header>Bữa trưa</Card.Header>
                <Card.Body>
                  <ol>
                    {mealPlan.lunch &&
                      mealPlan.lunch.map((item, index) => (
                        <li key={index}>
                          {item.name} - {item.calories} calo
                        </li>
                      ))}
                  </ol>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="mb-3">
                <Card.Header>Bữa tối</Card.Header>
                <Card.Body>
                  <ol>
                    {mealPlan.dinner &&
                      mealPlan.dinner.map((item, index) => (
                        <li key={index}>
                          {item.name} - {item.calories} calo
                        </li>
                      ))}
                  </ol>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="mb-3">
                <Card.Header>Bữa ăn nhẹ</Card.Header>
                <Card.Body>
                  <ol>
                    {mealPlan.snacks &&
                      mealPlan.snacks.map((item, index) => (
                        <li key={index}>
                          {item.name} - {item.calories} calo
                        </li>
                      ))}
                  </ol>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      )}
    </Container>
  );
};

export default CaloriesCalculator;
