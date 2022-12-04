import { useLocation } from "react-router-dom";

export default function Contact() {

  const queryString = useLocation().search

  const queryParams = new URLSearchParams(queryString)
  const name = queryParams.get("name")

  return (
    <div>
      <h2>Hey {name}, Constact us here...</h2>
      <p>
        Morbi id eleifend odio. Donec sapien turpis, venenatis ut dignissim
        efficitur, blandit vel ex. Vivamus porta blandit purus, fermentum
        maximus eros commodo ut. Vestibulum lectus tellus, mollis non suscipit
        vel, pharetra quis ante. Mauris dapibus bibendum ipsum. Maecenas dapibus
        arcu sollicitudin ipsum molestie tincidunt. In suscipit molestie ligula
        et interdum. Nam quis lectus in purus consectetur malesuada. Donec
        placerat ante id nibh tristique, vitae venenatis turpis imperdiet.
        Praesent bibendum elementum massa, a consectetur felis. Aenean porttitor
        dolor nec tincidunt faucibus. Praesent interdum felis sit amet diam
        ultrices dapibus. Nullam purus erat, bibendum vitae sodales ac, commodo
        nec elit. Duis lobortis nisi sed dictum pharetra. Sed volutpat justo
        varius, viverra orci in, rutrum diam.
      </p>
    </div>
  );
}
