<script>
</script>

<style>
    h1 {
        font-size: 39px;
        text-align: center;
        margin: 40px 0;
    }
    h2 {
        padding: 8px;
        box-shadow: 0px 0px 0px 0px rgb(121, 119, 119);
        transition: all 0.5s ease-in-out;
        transform: scale(1);
        text-align: center;
    }
    p {
        text-align: center;
        font-size: 20px;
    }
    svg {
        transition: all 0.3s ease-in-out;
        transform: scale(1) translate(0, 0);
    }
    .logo-container {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .logo-container:hover > h2 {
        box-shadow: 1px 12px 12px 1px rgb(121, 119, 119);
        transition: all 0.5s ease-in-out;
        transform: scale(1.24);
        color: white;
        z-index: 5;
    }
    .logo-container:hover > .container {
        transform: translate(-40px, 0);
        transition: transform 0.5s ease-in-out;
    }
    .logo-container > .container {
        position: relative;
        width: 80px;
        height: 80px;
        transition: transform 0.5s ease-in-out;
    }
    .logo-container > .container > svg {
        position: absolute;
        top: 0;
        left: 0;
    }
    .logo-container > .container > .ring1 {
        transition: all 0.3s ease-in-out;
        animation-name: spin;
        animation-duration: 5000ms;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
        transform-origin: 50% 50%;
    }
    .logo-container > .container > .ring,
    .logo-container > .container > .ring2 {
        transition: all 0.3s ease-in-out;
        animation-name: spin-re;
        animation-duration: 5000ms;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
    }
    @keyframes spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
    @keyframes spin-re {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(-360deg);
        }
    }
    a {
        text-decoration: none;
        display: inline-block;
        margin-left: auto;
        width: 100%;
    }
    :global(body) {
        background: rgb(187, 187, 217);
    }
</style>

<h1>Welcome!</h1>
<h2>You've probably reached this by accident.</h2>
<p>Are you by chance looking for..</p>
<a href="./dev">
    <div class="logo-container">
        <div class="container">
            <svg
                class="ring"
                width="80px"
                height="80px"
                version="1.1"
                viewBox="0 0 210 297"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:cc="http://creativecommons.org/ns#"
                xmlns:dc="http://purl.org/dc/elements/1.1/"
                xmlns:osb="http://www.openswatchbook.org/uri/2009/osb"
                xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">
                <g
                    transform="matrix(-.60424 0 0 -.6379 164.55 240.83)"
                    stroke="#000">
                    <path
                        d="m185.03 147.03c0.29362 28.491-17.677 55.422-42.969 67.929-30.732 16.052-71.107 11.16-96.601-12.53-20.34-18.105-29.779-47.749-22.423-74.131 7.5005-29.208 33.643-51.543 62.962-56.943 32.155-6.6565 68.021 6.741 86.315 34.375 8.1843 12.119 12.747 26.66 12.716 41.3z"
                        fill="none"
                        stroke-width="1.8428" />
                    <path
                        d="m63.5 88.446c0.32868 8.4746-9.0805 15.209-16.996 12.164-8.1276-2.4222-11.467-13.5-6.0327-20.011 4.9141-6.9121 16.477-6.5003 20.887 0.74378 1.3908 2.0894 2.1456 4.5929 2.1413 7.1029z"
                        stroke-width="3" />
                </g>
            </svg>

            <svg
                class="ring1"
                width="80px"
                height="80px"
                version="1.1"
                viewBox="0 0 210 297"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:cc="http://creativecommons.org/ns#"
                xmlns:dc="http://purl.org/dc/elements/1.1/"
                xmlns:osb="http://www.openswatchbook.org/uri/2009/osb"
                xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">
                <g transform="matrix(.74976 0 0 .78763 62.391 77.716)">
                    <path
                        transform="matrix(.35289 0 0 .33592 -83.215 -98.67)"
                        d="m526.81 501.29a232.99 230.14 0 0 0-118.69 32.295 36.417 38.256 0 0 1 7.6328 23.436 36.417 38.256 0 0 1-36.416 38.258 36.417 38.256 0 0 1-28.443-14.369 232.99 230.14 0 0 0-56.74 150.52 232.99 230.14 0 0 0 232.99 230.14 232.99 230.14 0 0 0 232.99-230.14 232.99 230.14 0 0 0-232.99-230.13 232.99 230.14 0 0 0-0.33594 0zm-175.92 79.619a232.99 230.14 0 0 1 57.227-47.324 36.417 38.256 0 0 0-28.783-14.82 36.417 38.256 0 0 0-36.418 38.256 36.417 38.256 0 0 0 7.9746 23.889z"
                        fill="none"
                        stroke="#000"
                        stroke-width="5.3523" />
                </g>
            </svg>

            <svg
                class="ring2"
                width="80px"
                height="80px"
                version="1.1"
                viewBox="0 0 210 297"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:cc="http://creativecommons.org/ns#"
                xmlns:dc="http://purl.org/dc/elements/1.1/"
                xmlns:osb="http://www.openswatchbook.org/uri/2009/osb"
                xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">
                <path
                    class="logo-group1"
                    transform="scale(.26458)"
                    d="m387.94 263.53a310.76 292.19 0 0 0-158.12 41.004 48.571 48.571 0 0 1 10.18 29.754 48.571 48.571 0 0 1-48.572 48.572 48.571 48.571 0 0 1-37.936-18.24 310.76 292.19 0 0 0-75.68 191.1 310.76 292.19 0 0 0 310.76 292.19 310.76 292.19 0 0 0 310.76-292.19 310.76 292.19 0 0 0-310.76-292.19 310.76 292.19 0 0 0-0.62891 0z"
                    fill="none"
                    stroke="#000"
                    stroke-width="6.965" />
            </svg>
        </div>
        <h2>Nebula Web Development</h2>
    </div>
</a>
<h2 style="text-align:center;font-size:40px;margin:40px 0;">OR..</h2>
<a href="./nebula">
    <div class="logo-container">
        <h2>Joystick Nebula Gaming</h2>
    </div>
</a>
