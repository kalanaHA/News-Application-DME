import { useState } from 'react';
import '../../app/tailwind.css'
// import { register } from '../utils/api';

const RegistrationForm = () => {
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [reenterpassword, setRePassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== reenterpassword) {
      setError('Passwords do not match');
      return;
    }
    try {
      const response = await axios.post('http://localhost:5000/api/auth/register', {
        firstname:firstname,
        lastname:lastname,
        email: email,
        password: password,
      });

      //navigate the login page
      if(response.statusCode==200) {
        history.push('/login');
      }

    } catch (error) {
      console.error('Registration error:', error);
    }
  };

  return (
  <div >
    <section className="bg-cover bg-center bg-no-repeat dark:bg-gray-500"
        style={{
          backgroundImage: `url(./regi.png)`, 
        }}>
      <form onSubmit={handleRegister}>
            
        <div class=" rounded-md space-y-12 flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          
          <div class="border-b border-gray-900/10 pb-12">
            <h2 class="text-32 font-semibold leading-7 text-gray-900">Personal Information</h2>
            <p class="mt-1 text-20 leading-6 text-gray-700">Use valid email for registration.</p>

            <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div class="sm:col-span-3">
                <label for="first-name" class="block text-16 font-medium leading-6 text-gray-900">First name</label>
                <div class="mt-2">
                  <input 
                      type="text" 
                      name="first-name" 
                      id="first-name" 
                      autocomplete="first-name" 
                      onChange={(e) => setFirstName(e.target.value)}
                      class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                </div>
              </div>

              <div class="sm:col-span-3">
                <label for="last-name" class="block text-16 font-medium leading-6 text-gray-900">Last name</label>
                <div class="mt-2">
                  <input 
                      type="text" 
                      name="last-name" 
                      id="last-name" 
                      autocomplete="last-name" 
                      onChange={(e) => setLastName(e.target.value)}
                      class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                </div>
              </div>

              <div class="sm:col-span-4">
                <label for="email" class="block text-16 font-medium leading-6 text-gray-900">Email address</label>
                <div class="mt-2">
                  <input 
                      id="email" 
                      name="email" 
                      type="email" 
                      autocomplete="email" 
                      onChange={(e) => setEmail(e.target.value)}
                      class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                </div>
              </div>

              <div class="sm:col-span-4">
                <label for="password" class="block text-16 font-medium leading-6 text-gray-900">Password</label>
                <div class="mt-2">
                  <input 
                      type="password" 
                      name="password" 
                      id="password" 
                      autocomplete="password" 
                      onChange={(e) => setPassword(e.target.value)}
                      class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                      {error && <p>{error}</p>}
                </div>
              </div>

              <div class="sm:col-span-4">
                <label for="password" class="block text-16 font-medium leading-6 text-gray-900">Re-enter Password</label>
                <div class="mt-2">
                  <input 
                      type="password" 
                      name="password" 
                      id="password" 
                      autocomplete="password" 
                      onChange={(e) => setRePassword(e.target.value)}
                      class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-16 sm:leading-6"
                      />
                      {error && <p>{error}</p>}
                </div>
              </div>
            </div>
            <div class="mt-6 flex items-center justify-end gap-x-6">
              <a href="/login">
                <button type="" class=" rounded-md  text-sm font-semibold leading-6 text-gray-900">Cancel</button>
              </a>
          <button type="submit" class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
        </div>
          </div>

        </div>


      </form>
    </section>
  </div>
    
  );
};

export default RegistrationForm;
