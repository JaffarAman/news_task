import React from 'react';
import { Menu, Transition } from '@headlessui/react';
import { Bell, Mail, Star, AlertCircle } from 'lucide-react';

const notifications = [
  {
    id: 1,
    type: 'message',
    title: 'New message from Sarah',
    description: 'Hey, have you seen the latest tech news?',
    time: '5m ago',
    icon: Mail,
    color: 'text-blue-500',
  },
  {
    id: 2,
    type: 'alert',
    title: 'Breaking News Alert',
    description: 'Major announcement in the tech industry',
    time: '30m ago',
    icon: AlertCircle,
    color: 'text-red-500',
  },
  {
    id: 3,
    type: 'recommendation',
    title: 'Recommended for you',
    description: 'Based on your reading history',
    time: '2h ago',
    icon: Star,
    color: 'text-yellow-500',
  },
];

const NotificationDropdown = () => {
  return (
    <Menu as="div" className="relative">
      <Menu.Button className="relative p-2 hover:bg-gray-100 rounded-full">
        <Bell className="h-6 w-6 text-gray-500" />
        <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
      </Menu.Button>

      <Transition
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <Menu.Items className="absolute right-0 mt-2 w-80 origin-top-right bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Notifications</h3>
            <div className="space-y-4">
              {notifications.map((notification) => (
                <Menu.Item key={notification.id}>
                  {({ active }) => (
                    <div
                      className={`flex items-start space-x-3 p-2 rounded-lg ${active ? 'bg-gray-50' : ''
                        }`}
                    >
                      <notification.icon className={`h-5 w-5 mt-1 ${notification.color}`} />
                      <div>
                        <p className="text-sm font-medium text-gray-900">{notification.title}</p>
                        <p className="text-sm text-gray-500">{notification.description}</p>
                        <p className="text-xs text-gray-400 mt-1">{notification.time}</p>
                      </div>
                    </div>
                  )}
                </Menu.Item>
              ))}
            </div>
            <button className="w-full mt-4 text-sm text-blue-600 hover:text-blue-700">
              View all notifications
            </button>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default NotificationDropdown;