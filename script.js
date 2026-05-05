// تحديث قيمة الصوت عند السحب
const slider = document.getElementById("volume-slider");
const volText = document.getElementById("vol-value");

slider.oninput = function() {
    volText.innerHTML = this.value + "%";
    console.log("تغيير الصوت إلى: " + this.value);
    // هنا يمكنك إرسال الأمر إلى الجهاز
};

// وظيفة تغيير الوضع
function setMode(mode) {
    alert("تم تفعيل: " + mode);
    // كود الربط البرمجي يوضع هنا
}

// وظيفة تحديث الإضاءة
function updateLight() {
    const color = document.getElementById("rgb-picker").value;
    console.log("تغيير الإضاءة إلى: " + color);
}
