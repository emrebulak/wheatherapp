const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
    }
});

export const SwalAlert = (title, text, icon) => {
    Swal.fire({
        title,
        text,
        icon
    });
}

export const ToastAlert = (icon, title) => {
    Toast.fire({
        icon,
        title
    });
}