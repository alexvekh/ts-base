import React from "react";
import "./App.css";

// Функція-декоратор для зміни поведінки методу
function uppercase(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value; // Зберігаємо оригінальний метод

  // Перевизначаємо метод
  descriptor.value = function (...args: any[]) {
    const result = originalMethod.aply(this, args); // Викликаємо оригінальний метод
    if (typeof result === "string") {
      return result.toUpperCase(); // Повертаємо результат у верхньому регістрі
    }
    return result; // Якщо не рядок, повертаємо без змін
  };
  return descriptor;
}
class TextProcessor {
  // not support in npm create-react-app --typescript
  // needs other clean progect -
  @uppercase
  process(text: string): string {
    return text;
  }
}
const processor = new TextProcessor();
const result = processor.process("Hello, World!"); // Результат буде у верхньому регістрі

function App() {
  return (
    <div className="App">
      <header className="App-header"> Hello </header>
    </div>
  );
}

export default App;
