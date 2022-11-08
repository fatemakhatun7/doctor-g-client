import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className='mt-16'>
                <h1 className='text-5xl font-bold flex justify-center text-cyan-900'>Blogs</h1>
            </div>
            <div className='m-10'>
                <div className='bg-orange-50 rounded mb-5 p-5'>
                    <h3 className='font-bold'>Q-01: What are the differences between SQL and NoSQL?</h3>
                    <div className="overflow-x-auto mt-5">
                        <table className="table w-full">
                            <thead>
                            <tr>
                                <th></th>
                                <th>SQL</th>
                                <th>NoSQL</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <th>1</th>
                                <td>Relational</td>
                                <td>Non-relational</td>
                            </tr>
                            <tr className="active">
                                <th>2</th>
                                <td>Use structured query language and have a predefined schema.</td>
                                <td>NoSQL databases have dynamic schemas for unstructured data.</td>
                            </tr>
                            <tr>
                                <th>3</th>
                                <td>Are vertically scalable.</td>
                                <td>Are horizontally scalable.</td>
                            </tr>
                            <tr className="active">
                                <th>4</th>
                                <td>Are table based.</td>
                                <td>Are document, key-value, graph or wide-column stores.</td>
                            </tr>
                            <tr>
                                <th>5</th>
                                <td>Are better for multi-row transactions.</td>
                                <td>Are better for unstructured data like documents or JSON.</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className='bg-orange-50 rounded mb-5 p-5'>
                    <h3 className='font-bold'>Q-02: What is JWT, and how does it work?</h3>
                    <p className='mt-5'>JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed. JWTs can be signed using a secret (with the HMAC algorithm) or a public/private key pair using RSA or ECDSA.</p>
                    <p className='mt-3'>Although JWTs can be encrypted to also provide secrecy between parties, we will focus on signed tokens. Signed tokens can verify the integrity of the claims contained within it, while encrypted tokens hide those claims from other parties. When tokens are signed using public/private key pairs, the signature also certifies that only the party holding the private key is the one that signed it.</p>
                    <p className='mt-3'>In authentication, when the user successfully logs in using their credentials, a JSON Web Token will be returned. Since tokens are credentials, great care must be taken to prevent security issues. In general, you should not keep tokens longer than required.</p>
                    <p className='mt-3'>Whenever the user wants to access a protected route or resource, the user agent should send the JWT, typically in the Authorization header using the Bearer schema.</p>
                    <p className='mt-3'>This can be, in certain cases, a stateless authorization mechanism. The server's protected routes will check for a valid JWT in the Authorization header, and if it's present, the user will be allowed to access protected resources. If the JWT contains the necessary data, the need to query the database for certain operations may be reduced, though this may not always be the case.</p>
                </div>
                <div className='bg-orange-50 rounded mb-5 p-5'>
                    <h3 className='font-bold'>Q-3: What are the differences between Javascript and NodeJS?</h3>
                    <div className="overflow-x-auto mt-5">
                        <table className="table w-full">
                            <thead>
                            <tr>
                                <th></th>
                                <th>Javascript</th>
                                <th>NodeJS</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <th>1</th>
                                <td>Javascript is a programming language that is used for writing scripts on the website.</td>
                                <td>NodeJS is a Javascript runtime environment.</td>
                            </tr>
                            <tr className="active">
                                <th>2</th>
                                <td>Javascript can only be run in the browsers.</td>
                                <td>We can run Javascript outside the browser with the help of NodeJS.</td>
                            </tr>
                            <tr>
                                <th>3</th>
                                <td>It is basically used on the client-side.</td>
                                <td>It is mostly used on the server-side.</td>
                            </tr>
                            <tr className="active">
                                <th>4</th>
                                <td>Javascript is capable enough to add HTML and play with the DOM. </td>
                                <td>Nodejs does not have capability to add HTML tags.</td>
                            </tr>
                            <tr>
                                <th>5</th>
                                <td>Javascript can run in any browser engine as like JS core in safari and Spidermonkey in Firefox.</td>
                                <td>V8 is the Javascript engine inside of node.js that parses and runs Javascript. </td>
                            </tr>
                            <tr className="active">
                                <th>6</th>
                                <td>Javascript is used in frontend development.</td>
                                <td>Nodejs is used in server-side development.</td>
                            </tr>
                            <tr>
                                <th>7</th>
                                <td>Some of the javascript frameworks are RamdaJS, TypedJS, etc.</td>
                                <td>Some of the Nodejs modules are Lodash, express etc. These modules are to be imported from npm.</td>
                            </tr>
                            <tr className="active">
                                <th>8</th>
                                <td>It is the upgraded version of ECMA script that uses Chrome’s V8 engine written in C++. </td>
                                <td>Nodejs is written in C, C++ and Javascript.</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className='bg-orange-50 rounded mb-5 p-5'>
                    <h3 className='font-bold mb-5'>Q-4: How does NodeJS handle multiple requests at the same time?</h3>
                    <p className='mb-3'>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue.</p>
                    <p>If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;