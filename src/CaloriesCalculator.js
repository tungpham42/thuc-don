import React, { useState } from "react";
import { Container, Form, Button, Row, Col, Card } from "react-bootstrap";
import mealSuggestions from "./mealSuggestions";

const CaloriesCalculator = () => {
  const [caloriesNeeded, setCaloriesNeeded] = useState(null);
  const [weeklyMealPlan, setWeeklyMealPlan] = useState([]);

  const mealCategories = {
    breakfast: "Bữa sáng",
    lunch: "Bữa trưa",
    dinner: "Bữa tối",
    snacks: "Bữa ăn nhẹ",
  };

  const daysOfWeek = [
    "Thứ Hai",
    "Thứ Ba",
    "Thứ Tư",
    "Thứ Năm",
    "Thứ Sáu",
    "Thứ Bảy",
    "Chủ Nhật",
  ];

  const calculateCalories = (event) => {
    event.preventDefault();
    const { weight, height, age, activityLevel, gender } =
      event.target.elements;

    const BMR =
      gender.value === "male"
        ? 10 * parseFloat(weight.value) +
          6.25 * parseFloat(height.value) -
          5 * parseFloat(age.value) +
          5
        : 10 * parseFloat(weight.value) +
          6.25 * parseFloat(height.value) -
          5 * parseFloat(age.value) -
          161;

    const totalCalories = Math.round(BMR * parseFloat(activityLevel.value));
    setCaloriesNeeded(totalCalories);
    generateWeeklyMealPlan(totalCalories);
  };

  const generateWeeklyMealPlan = (calories) => {
    const calorieLimit = calories / 4;
    const planForWeek = [];

    for (let i = 0; i < 7; i++) {
      const dailyMealPlan = {
        breakfast: getMealsWithinLimit(mealSuggestions.breakfast, calorieLimit),
        lunch: getMealsWithinLimit(mealSuggestions.lunch, calorieLimit),
        dinner: getMealsWithinLimit(mealSuggestions.dinner, calorieLimit),
        snacks: getMealsWithinLimit(mealSuggestions.snacks, calorieLimit),
      };
      planForWeek.push(dailyMealPlan);
    }

    setWeeklyMealPlan(planForWeek);
  };

  const getMealsWithinLimit = (items = [], calorieLimit) => {
    let totalCalories = 0;
    let selectedMeals = [];

    const shuffled = Array.isArray(items)
      ? [...items].sort(() => 0.5 - Math.random())
      : [];

    for (const item of shuffled) {
      if (totalCalories + item.calories <= calorieLimit) {
        selectedMeals.push(item);
        totalCalories += item.calories;
      }
    }

    return selectedMeals;
  };

  const renderMealPlanForDay = (dayIndex, meals) => (
    <Card className="mb-3">
      <Card.Header>{daysOfWeek[dayIndex]}</Card.Header>
      <Card.Body>
        <Row>
          {Object.keys(mealCategories).map((category) => (
            <Col md={6} key={category}>
              <Card className="mb-3">
                <Card.Header>{mealCategories[category]}</Card.Header>
                <Card.Body>
                  <ol>
                    {meals[category].map((item, index) => (
                      <li key={index}>
                        {item.name} - {item.calories} calo
                      </li>
                    ))}
                  </ol>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Card.Body>
    </Card>
  );

  return (
    <Container className="mt-4">
      <h1>Gợi ý thực đơn cho tuần</h1>
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
          Gợi ý thực đơn cho tuần
        </Button>
      </Form>

      {caloriesNeeded && (
        <div className="mt-4">
          <h3>Nhu Cầu Calo Hàng Ngày Của Bạn: {caloriesNeeded} calo</h3>
        </div>
      )}

      {weeklyMealPlan.length > 0 && (
        <div className="mt-4">
          <h4>Kế hoạch bữa ăn hàng tuần:</h4>
          {weeklyMealPlan.map((dailyMealPlan, index) => (
            <div key={index}>{renderMealPlanForDay(index, dailyMealPlan)}</div>
          ))}
        </div>
      )}
    </Container>
  );
};

export default CaloriesCalculator;
