import React, { Component } from 'react';
import photo from "../../assets/img/photo-woman-sand.jpg"

class VideoIntro extends Component {
    render() {
        return(
            <section>
                            <div class="video-cover rounded">
                                <img alt="Image" src="assets/img/photo-woman-sand.jpg" class="bg-image" />
                                <div class="video-play-icon">
                                    <i class="icon-controller-play"></i>
                                </div>
                                <div class="embed-responsive embed-responsive-16by9">
                                    <iframe class="embed-responsive-item" data-src="https://www.youtube.com/embed/oYqvpjKJZkU?autoplay=1&amp;mute=1&amp;showinfo=0&amp;rel=0" allowfullscreen></iframe>
                                </div>
                            </div>
                            <h5 class="mb-4">Overview</h5>
                            <article>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                <ul>
                                    <li>
                                        Temporibus autem quibusdam
                                    </li>
                                    <li>
                                        Saepe eveniet ut et voluptates repudiandae sint
                                    </li>
                                    <li>
                                        Nemo enim ipsam voluptatem quia voluptas
                                    </li>
                                    <li>
                                        Atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.
                                    </li>
                                </ul>
                            </article>
                            <hr></hr>
            </section>
        );
    }
}
export default VideoIntro;