// script.js
document.getElementById('advice-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const morningClasses = parseInt(document.getElementById('morning-classes').value, 10);
    const gpa = parseFloat(document.getElementById('gpa').value);

    let advice = '';

    if (gpa >= 4 && morningClasses <= 2) {
        advice = "Keep up the good work! You can consider taking on a few more morning classes if you feel comfortable.";
    } else if (gpa >= 4 && morningClasses > 2) {
        advice = "Great job maintaining a high GPA with many morning classes. Remember to balance your schedule and get enough rest.";
    } else if (gpa < 3 && morningClasses <= 2) {
        advice = "It's time to focus on your studies. Try dedicating more time to learning and seek help from peers or tutors.";
    } else if (gpa < 3 && morningClasses > 2) {
        advice = "Consider reducing the number of morning classes to improve your GPA. Adjusting your study habits and seeking help might also be beneficial.";
    } else {
        advice = "You're doing well overall, but there's always room for improvement. Keep working hard and stay balanced.";
    }

    // Translate advice into Chinese
    const adviceZh = translateAdvice(advice);
    
    document.getElementById('advice').innerText = `${advice}\n\n${adviceZh}`;
});

function translateAdvice(advice) {
    const translations = {
        "Keep up the good work!": "继续保持好状态！",
        "You can consider taking on a few more morning classes if you feel comfortable.": "如果你觉得舒服的话，可以考虑多上一些早八。",
        "Great job maintaining a high GPA with many morning classes.": "在很多早八的情况下还能保持高绩点，干得漂亮。",
        "Remember to balance your schedule and get enough rest.": "记得平衡你的日程并获得足够的休息。",
        "It's time to focus on your studies.": "是时候专注于学习了。",
        "Try dedicating more time to learning and seek help from peers or tutors.": "试着多花些时间学习，并向同学或导师寻求帮助。",
        "Consider reducing the number of morning classes to improve your GPA.": "考虑减少早八的数量以提高你的绩点。",
        "Adjusting your study habits and seeking help might also be beneficial.": "调整学习习惯并寻求帮助也可能对你有好处。",
        "You're doing well overall, but there's always room for improvement.": "总体来说你做得很好，但总有进步的空间。",
        "Keep working hard and stay balanced.": "继续努力工作，保持平衡。"
    };

    return Object.entries(translations).reduce((translated, [eng, zh]) => translated.replace(eng, zh), advice);
}