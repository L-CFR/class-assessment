import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'sonner';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Eye, EyeOff } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate()

  const handleSignup = async () => {
    try {
      await axios.post("http://localhost:8080/signup", {
        email,
        password
      });
      toast.success('Signup Successful ! You can now Signin to continue.');
      navigate('/signin')
    } catch (error) {
      console.log('Signup Failed:', error);
      toast.error('Signup Failed!');
    }
  };

  return (
    <div className="min-h-screen w-full bg-cover bg-center flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
      style={{
        backgroundImage: `url('https://t3.ftcdn.net/jpg/06/57/87/96/360_F_657879643_IPq8qL0Dgz6n4IzzPzI8K1grEi8KgLY1.jpg')`,
      }}>
      <Card className="w-full max-w-sm bg-black/30 backdrop-blur-sm border border-white/20">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl text-center font-bold tracking-tight text-white">
            Create Account
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label className="text-white" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 hover:scale-105 transition-all duration-300"
            />
          </div>
          <div className="space-y-2">
            <Label className="text-white" htmlFor="password">
              Password
            </Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 hover:scale-105 transition-all duration-300"
              />
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="absolute right-2 top-1/2 -translate-y-1/2 hover:bg-transparent text-white"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4 text-white" />
                ) : (
                  <Eye className="h-4 w-4 text-white" />
                )}
              </Button>
            </div>
          </div>
          <Button
            className="w-full bg-blue-600 hover:bg-blue-700 text-white hover:scale-105 transition-all duration-300"
            onClick={handleSignup}
          >
            Sign Up
          </Button>
          <div className="text-sm text-center">
            <span className="text-gray-300">Already have an account? </span>
            <a
              href="/signin"
              className="font-semibold text-blue-400 hover:text-blue-500 hover:underline"
            >
              Sign in
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Signup;