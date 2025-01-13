import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { BarChart, Users, DollarSign, ArrowUpRight, Activity } from 'lucide-react';
import { Button } from './ui/button';

export default function Home() {
  const stats = [
    {
      title: "Total Revenue",
      value: "$45,231.89",
      change: "+20.1%",
      icon: <DollarSign className="h-4 w-4 text-gray-300" />
    },
    {
      title: "Active Users",
      value: "2,450",
      change: "+15.2%",
      icon: <Users className="h-4 w-4 text-gray-300" />
    },
    {
      title: "Sales",
      value: "12,234",
      change: "+12.3%",
      icon: <BarChart className="h-4 w-4 text-gray-300" />
    },
    {
      title: "Active Sessions",
      value: "573",
      change: "+8.4%",
      icon: <Activity className="h-4 w-4 text-gray-300" />
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <h1 className="text-2xl font-semibold text-white">
              Dashboard
            </h1>
            <div className='flex flex-row gap-6'>
              <div className="relative">
                <img 
                  src="/api/placeholder/32/32"
                  alt="Profile"
                  className="h-8 w-8 rounded-full ring-2 ring-gray-700"
                />
                <span className="absolute bottom-0 right-0 block h-2 w-2 rounded-full bg-green-400 ring-2 ring-gray-800" />
              </div>
              <Button 
                className='w-full bg-blue-600 hover:bg-blue-700 text-white hover:scale-105 transition-all duration-300'
                variant="default" onClick={() => {window.location.href = '/signin'}}>Login</Button>
            </div>
            </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {/* Welcome Section */}
        <div className="px-4 sm:px-0">
          <h2 className="text-xl font-semibold text-white">
            Welcome back, User!
          </h2>
          <p className="mt-1 text-sm text-gray-400">
            Here's what's happening with your projects today.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <Card key={index} className="hover:scale-105 transition-all duration-300 bg-gray-800 border-gray-700">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-gray-400">
                  {stat.title}
                </CardTitle>
                <div className="h-8 w-8 bg-gray-700 rounded-full flex items-center justify-center">
                  {stat.icon}
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-white">
                  {stat.value}
                </div>
                <div className="flex items-center text-sm text-green-400">
                  <ArrowUpRight className="h-4 w-4 mr-1" />
                  {stat.change}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[1, 2, 3].map((_, i) => (
                  <div
                    key={i}
                    className="flex items-center space-x-4 p-3 hover:bg-gray-700 rounded-lg transition-colors duration-150"
                  >
                    <div className="h-10 w-10 rounded-full bg-blue-900 flex items-center justify-center">
                      <Activity className="h-5 w-5 text-blue-400" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-white">
                        New project milestone reached
                      </p>
                      <p className="text-sm text-gray-400">
                        2 hours ago
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}