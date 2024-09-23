import React from "react";

type MessageType = "info" | "danger" | "success" | "warning" | "dark";

interface MessageProp {
  type: MessageType;
  content: string;
}

function Message({ type, content }: MessageProp) {
  let alertClass = "";

  switch (type) {
    case "info":
      alertClass =
        "text-blue-800 bg-blue-50 dark:bg-gray-800 dark:text-blue-400";
      break;
    case "danger":
      alertClass = "text-red-800 bg-red-50 dark:bg-gray-800 dark:text-red-400";
      break;
    case "success":
      alertClass =
        "text-green-800 bg-green-50 dark:bg-gray-800 dark:text-green-400";
      break;
    case "warning":
      alertClass =
        "text-yellow-800 bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300";
      break;
    case "dark":
      alertClass =
        "text-gray-800 bg-gray-50 dark:bg-gray-800 dark:text-gray-300";
      break;
    default:
      alertClass =
        "text-gray-800 bg-gray-50 dark:bg-gray-800 dark:text-gray-300";
      break;
  }

  return (
    <>
      <div
        className={`p-4 mb-4 text-sm rounded-lg w-80 text-center ${alertClass}`}
        role="alert"
      >
        <span className="font-medium">{content}</span>
      </div>
    </>
  );
}

export default Message;
