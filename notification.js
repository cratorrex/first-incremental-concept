export function notification(text, container=false, timeout=5000) {
    if (!container) container = $("#main-container");
    let $notification = $("<div>").text(text);
    $notification.css({
        position: "absolute",
        top: "1rem",
        right: "1rem",
        backgroundColor: "black",
        color: "white",
        textAlign: "center",
        border: "2px solid white",
        borderRadius: "15px",
        padding: "0.5rem",
        fontSize: "1rem",
        zIndex: 1000
    });
    $notification.attr("id", "notification");

    if (container) {
        container.append($notification);
        setTimeout(() => {
            $notification.animate({ top: "-=100px" }, 500, () => {
                $notification.remove();
            });
        }, timeout); 
    }
    else {
        return $notification;
    }
}