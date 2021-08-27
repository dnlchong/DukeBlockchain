/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/typography'),
    ]
  }
  ```
*/
export default function Example() {
    return (
      
      <div class="bg-white">
        <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="bg-indigo-700 rounded-lg shadow-xl overflow-hidden">
          <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
            <div className="lg:self-center">
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                <span className="block">DBL'S FIRST MEETING:</span>
              </h2>
              <br/>
              <h2 className="text-2xl font-bold text-white sm:text-3xl">
              <span className="block">Sept 4, 2021, 2-3PM EST in Social Sciences 124.</span>
              </h2>
              {/*
              <a
                href="#"
                className="mt-8 bg-white border border-transparent rounded-md shadow px-5 py-3 inline-flex items-center text-base font-medium text-indigo-600 hover:bg-indigo-50"
              >
                Sign up for free
              </a>
              */}
              <br/>
              <img src="https://i.imgur.com/5hL5shu.png" className="w-2/3"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  <div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
    <div class="lg:grid lg:grid-cols-3 lg:gap-8">
      <div>
        <h2 class="text-3xl font-extrabold text-gray-900">
          Our programs:
        </h2>
      </div>
      <div class="mt-12 lg:mt-0 lg:col-span-2">
        <dl class="space-y-12">
          <div>
            <dt class="text-lg leading-6 font-medium text-gray-900">
              DBL x Harmony One Programming Course (9/4/21 - 10/2/21)
            </dt>
            <dd class="mt-2 text-base text-gray-500">
              DBL is teaching a course on programming on the Ethereum blockchain. OUR GUARANTEE: Learn enough to start your own blockchain project, or join other projects with students in the class.
            </dd>
            <dd class="mt-2 text-base text-gray-500">
              Primary contact: <a class="text-blue-400" href="mailto:dc343@duke.edu">daniel.chong@duke.edu</a>
            </dd>
          </div>
          <div>
            <dt class="text-lg leading-6 font-medium text-gray-900">
              Blockchain Fund
            </dt>
            <dd class="mt-2 text-base text-gray-500">
              We're selling NFTs and tokens to help fund a blockchain fund. Turn your crypto investments into moonshots, and gain investment experience relevant to real-life funds.
            </dd>
            <dd class="mt-2 text-base text-gray-500">
              Primary contact: <a class="text-blue-400" href="mailto:sujay.alluri@duke.edu">sujay.alluri@duke.edu</a>
            </dd>
          </div>
          <div>
            <dt class="text-lg leading-6 font-medium text-gray-900">
              ICHI Conference
            </dt>
            <dd class="mt-2 text-base text-gray-500">
              Meet the team behind ICHI: a stablecoin and governance platform. FREE FOOD AND DRINKS PROVIDED!
            </dd>
            <dd class="mt-2 text-base text-gray-500">
              Primary contact: <a class="text-blue-400" href="mailto:manmit.singh@duke.edu">manmit.singh@duke.edu</a>
            </dd>
          </div>
        </dl>
        
      </div>
      
    </div>
  </div>
</div>
    )
  }
  