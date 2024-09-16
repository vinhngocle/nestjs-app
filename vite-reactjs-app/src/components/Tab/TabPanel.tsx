import { ReactNode } from "react";

interface TabPanelProp {
  tabId: string;
  activeTab: string;
  children: ReactNode;
}

function TabPanel({ tabId, activeTab, children }: TabPanelProp) {
  return (
    <div
      className={`p-4 rounded-lg bg-gray-50 dark:bg-gray-800 ${
        activeTab === tabId ? "" : "hidden"
      }`}
      id={tabId}
      role="tabpanel"
      aria-labelledby={`${tabId}-tab`}
    >
      {children}
    </div>
  );
}

export default TabPanel;
