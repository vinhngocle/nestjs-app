import { ReactNode, useState } from "react";
import TabPanel from "./TabPanel";
import MySwiper from "../Swiper/Swiper";

interface Product {
  image: string;
  title: string;
  description: string;
  category: string;
}

interface Tab {
  id: string;
  label: string;
  content: ReactNode;
  courses?: Product[];
}

interface TabProps {
  tabs: Tab[];
}

function Tab({ tabs }: TabProps) {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };

  return (
    <div className="p-6">
      <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
        <ul
          className="flex flex-wrap -mb-px text-sm font-medium text-center"
          role="tablist"
        >
          {tabs.map((tab) => (
            <li key={tab.id} className="me-2" role="presentation">
              <button
                className={`inline-block p-4 border-b-2 rounded-t-lg ${
                  activeTab === tab.id
                    ? "border-blue-500"
                    : "border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                }`}
                onClick={() => handleTabClick(tab.id)}
                id={`${tab.id}-tab`}
                type="button"
                role="tab"
                aria-controls={tab.id}
                aria-selected={activeTab === tab.id}
              >
                {tab.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        {tabs.map((tab) => (
          <TabPanel key={tab.id} tabId={tab.id} activeTab={activeTab}>
            <div>{tab.content}</div>
            {tab.courses && <MySwiper cards={tab.courses} />}
          </TabPanel>
        ))}
      </div>
    </div>
  );
}

export default Tab;
