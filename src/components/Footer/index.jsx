import React from 'react';
import { Link } from 'react-router-dom'

import { Container } from '@mui/material';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
// import Item from '@mui/material/Item';
import styles from './Footer.module.scss';


import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import WhatsApp from '@mui/icons-material/WhatsApp';
import Telegram from '@mui/icons-material/Telegram';
import Phone from '@mui/icons-material/Phone'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import Instagram from '@mui/icons-material/Instagram';
import Facebook from '@mui/icons-material/Facebook';
import Linkedin from '@mui/icons-material/LinkedIn';


const drawerWidth = 240;


export const Footer = (props) => {

    return (
        <footer>
		<div data-elementor-type="wp-post" data-elementor-id="172" class="elementor elementor-172">
			<div class="elementor-inner">
				<div class="elementor-section-wrap">
					<section
						class="elementor-section elementor-top-section elementor-element elementor-element-373f121 elementor-section-full_width footer-layout1 elementor-section-height-default elementor-section-height-default"
						data-id="373f121" data-element_type="section" data-settings="{'
						background_background':'classic'}" >
						<div class="elementor-container elementor-column-gap-no">
							<div class="elementor-row">
								<div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-8659c6f"
									data-id="8659c6f" data-element_type="column">
									<div class="elementor-column-wrap elementor-element-populated">
										<div class="elementor-widget-wrap">
											<section
												class="elementor-section elementor-inner-section elementor-element elementor-element-528b08f elementor-section-boxed elementor-section-height-default elementor-section-height-default"
												data-id="528b08f" data-element_type="section">
												<div class="elementor-container elementor-column-gap-no">
													<div class="elementor-row">
														<div class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-7af8bf1"
															data-id="7af8bf1" data-element_type="column">
															<div
																class="elementor-column-wrap elementor-element-populated">
																<div class="elementor-widget-wrap">
																	<div class="elementor-element elementor-element-aa30123 elementor-widget__width-initial elementor-widget elementor-widget-text-editor"
																		data-id="aa30123" data-element_type="widget"
																		data-widget_type="text-editor.default">
																		<div class="elementor-widget-container">
																			<div
																				class="elementor-text-editor elementor-clearfix">
																				<div class="footer-info">
																					<div class="footer-info_icon"><i
																							class="fal fa-map-marker-alt"></i>
																					</div>
																					<div class="media-body">
																						<span
																							class="footer-info_label">Адрес</span>
																						<div class="footer-info_link">
																							Раззакова 32, Бишкек</div>
																					</div>
																				</div>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
														</div>
														<div class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-42336e0"
															data-id="42336e0" data-element_type="column">
															<div
																class="elementor-column-wrap elementor-element-populated">
																<div class="elementor-widget-wrap">
																	<div class="elementor-element elementor-element-21d846c elementor-widget__width-initial elementor-widget elementor-widget-text-editor"
																		data-id="21d846c" data-element_type="widget"
																		data-widget_type="text-editor.default">
																		<div class="elementor-widget-container">
																			<div
																				class="elementor-text-editor elementor-clearfix">
																				<div class="footer-info">
																					<div class="footer-info_icon"><i
																							class="fal fa-clock"></i>
																					</div>
																					<div class="media-body">
																						<span
																							class="footer-info_label">Режим
																							работы</span>
																						<div class="footer-info_link">
																							ПН-ПТ 9:00 – 18:00
																							Суббота
																							9:00 – 16:00</div>
																					</div>
																				</div>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
														</div>
														<div class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-8c6c292"
															data-id="8c6c292" data-element_type="column">
															<div
																class="elementor-column-wrap elementor-element-populated">
																<div class="elementor-widget-wrap">
																	<div class="elementor-element elementor-element-9760504 elementor-widget__width-initial elementor-widget elementor-widget-text-editor"
																		data-id="9760504" data-element_type="widget"
																		data-widget_type="text-editor.default">
																		<div class="elementor-widget-container">
																			<div
																				class="elementor-text-editor elementor-clearfix">
																				<div class="footer-info">
																					<div class="footer-info_icon"><i
																							class="fal fa-phone-volume"></i>
																					</div>
																					<div class="media-body">
																						<span
																							class="footer-info_label">КОНТАКТЫ</span>
																						<div class="footer-info_link"><a
																								href="mailto:info@techbiz.com">adbsolution@gmail.com</a>
                                                                                                <br/>
                                                                                                <a
																								href="tel:+2597462153">
																								996 (500)-177-009
																							</a></div>
																					</div>
																				</div>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
											</section>
											<section
												class="elementor-section elementor-inner-section elementor-element elementor-element-89d02d5 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
												data-id="89d02d5" data-element_type="section">
												<div class="elementor-container elementor-column-gap-no">
													<div class="elementor-row">
														<div class="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-cb65c73"
															data-id="cb65c73" data-element_type="column">
															<div
																class="elementor-column-wrap elementor-element-populated">
																<div class="elementor-widget-wrap">
																	<div class="elementor-element elementor-element-6d140d3 elementor-widget elementor-widget-heading"
																		data-id="6d140d3" data-element_type="widget"
																		data-widget_type="heading.default">
																		<div class="elementor-widget-container">
																			<h2
																				class="elementor-heading-title elementor-size-default">
																				О НАС</h2>
																		</div>
																	</div>
																	<div class="elementor-element elementor-element-4792919 elementor-widget__width-initial elementor-widget elementor-widget-heading"
																		data-id="4792919" data-element_type="widget"
																		data-widget_type="heading.default">
																		<div class="elementor-widget-container">
																			<p
																				class="elementor-heading-title elementor-size-default">
																				В ADB Solution мы стремимся предоставлять высококачественные услуги в области аудита и консалтинга, помогая вам эффективно управлять финансовыми рисками и достигать ваших бизнес-целей. </p>
																		</div>
																	</div>
																	<div class="elementor-element elementor-element-40a50e1 e-grid-align-left e-grid-align-tablet-left elementor-shape-rounded elementor-grid-0 elementor-widget elementor-widget-social-icons"
																		data-id="40a50e1" data-element_type="widget"
																		data-widget_type="social-icons.default">
																		<div class="elementor-widget-container">
																			<div
																				class="elementor-social-icons-wrapper elementor-grid">
																				<span class="elementor-grid-item">
																					<a class="elementor-icon elementor-social-icon elementor-social-icon-facebook-f elementor-repeater-item-1342383"
																						href="http://www.facebook.com"
																						target="_blank">
																						<span
																							class="elementor-screen-only">Facebook-f</span>
																						<i
																							class="fab fa-facebook-f"></i>
																					</a>
																				</span>
																				<span class="elementor-grid-item">
																					<a class="elementor-icon elementor-social-icon elementor-social-icon-twitter elementor-repeater-item-5a449c6"
																						href="http://www.twitter.com"
																						target="_blank">
																						<span
																							class="elementor-screen-only">Twitter</span>
																						<i class="fab fa-twitter"></i>
																					</a>
																				</span>
																				<span class="elementor-grid-item">
																					<a class="elementor-icon elementor-social-icon elementor-social-icon-youtube elementor-repeater-item-ee7fce2"
																						href="http://www.youtube.com"
																						target="_blank">
																						<span
																							class="elementor-screen-only">Youtube</span>
																						<i class="fab fa-youtube"></i>
																					</a>
																				</span>
																				<span class="elementor-grid-item">
																					<a class="elementor-icon elementor-social-icon elementor-social-icon-linkedin-in elementor-repeater-item-9769bf6"
																						href="http://www.linkedin.com"
																						target="_blank">
																						<span
																							class="elementor-screen-only">Linkedin-in</span>
																						<i
																							class="fab fa-linkedin-in"></i>
																					</a>
																				</span>
																				<span class="elementor-grid-item">
																					<a class="elementor-icon elementor-social-icon elementor-social-icon-instagram elementor-repeater-item-2301d9e"
																						href="http://www.instagram.com"
																						target="_blank">
																						<span
																							class="elementor-screen-only">Instagram</span>
																						<i class="fab fa-instagram"></i>
																					</a>
																				</span>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
														</div>
														<div class="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-ba3d77d"
															data-id="ba3d77d" data-element_type="column">
															<div
																class="elementor-column-wrap elementor-element-populated">
																<div class="elementor-widget-wrap">
																	<div class="elementor-element elementor-element-9b3dd0e elementor-widget elementor-widget-heading"
																		data-id="9b3dd0e" data-element_type="widget"
																		data-widget_type="heading.default">
																		<div class="elementor-widget-container">
																			<h2
																				class="elementor-heading-title elementor-size-default">
																				Полезные ссылки</h2>
																		</div>
																	</div>
																	<div class="elementor-element elementor-element-0804c61 footer-widget widget_nav_menu  elementor-widget elementor-widget-wp-widget-nav_menu"
																		data-id="0804c61" data-element_type="widget"
																		data-widget_type="wp-widget-nav_menu.default">
																		<div class="elementor-widget-container">
																			<div class="menu-links-container">
																				<ul id="menu-links" class="menu">
																					<li id="menu-item-189"
																						class="menu-item menu-item-type-post_type menu-item-object-page menu-item-189">
																						<a
																							href="">Team</a>
																					</li>
																					<li id="menu-item-188"
																						class="menu-item menu-item-type-post_type menu-item-object-page menu-item-188">
																						<a
																							href="">Projects</a>
																					</li>
																					<li id="menu-item-187"
																						class="menu-item menu-item-type-post_type menu-item-object-page menu-item-187">
																						<a
																							href="">Contact
																							Us</a>
																					</li>
																					<li id="menu-item-190"
																						class="menu-item menu-item-type-post_type menu-item-object-page menu-item-190">
																						<a
																							href="">Service</a>
																					</li>
																					<li id="menu-item-191"
																						class="menu-item menu-item-type-post_type menu-item-object-page menu-item-191">
																						<a
																							href="">About
																							Us</a>
																					</li>
																				</ul>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
														</div>
														<div class="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-bef5374"
															data-id="bef5374" data-element_type="column">
															<div
																class="elementor-column-wrap elementor-element-populated">
																<div class="elementor-widget-wrap">
																	<div class="elementor-element elementor-element-839fe4e elementor-widget elementor-widget-heading"
																		data-id="839fe4e" data-element_type="widget"
																		data-widget_type="heading.default">
																		<div class="elementor-widget-container">
																			<h2
																				class="elementor-heading-title elementor-size-default">
																				Услуги</h2>
																		</div>
																	</div>
																	<div class="elementor-element elementor-element-3679921 footer-widget widget_nav_menu elementor-widget elementor-widget-wp-widget-nav_menu"
																		data-id="3679921" data-element_type="widget"
																		data-widget_type="wp-widget-nav_menu.default">
																		<div class="elementor-widget-container">
																			<div class="menu-explore-container">
																				<ul id="menu-explore" class="menu">
																					<li id="menu-item-194"
																						class="menu-item menu-item-type-post_type menu-item-object-page menu-item-194">
																						<a
																							href="">Team</a>
																					</li>
																					<li id="menu-item-195"
																						class="menu-item menu-item-type-post_type menu-item-object-page menu-item-195">
																						<a
																							href="">Pricing
																							Plan</a>
																					</li>
																					<li id="menu-item-196"
																						class="menu-item menu-item-type-post_type menu-item-object-page menu-item-196">
																						<a
																							href="">Service</a>
																					</li>
																					<li id="menu-item-197"
																						class="menu-item menu-item-type-post_type menu-item-object-page menu-item-197">
																						<a
																							href="">About
																							Us</a>
																					</li>
																				</ul>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
														</div>
														<div class="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-854589d"
															data-id="854589d" data-element_type="column">
															<div
																class="elementor-column-wrap elementor-element-populated">
																<div class="elementor-widget-wrap">
																	<div class="elementor-element elementor-element-08c8cfd elementor-widget elementor-widget-heading"
																		data-id="08c8cfd" data-element_type="widget"
																		data-widget_type="heading.default">
																		<div class="elementor-widget-container">
																			<h2
																				class="elementor-heading-title elementor-size-default">
																				Адрес</h2>
																		</div>
																	</div>
																	<div class="elementor-element elementor-element-6201414 elementor-widget elementor-widget-google_maps"
																		data-id="6201414" data-element_type="widget"
																		data-widget_type="google_maps.default">
																		<div class="elementor-widget-container">
																			<div class="elementor-custom-embed">
																				<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d414.7126426735958!2d74.60364209123351!3d42.86948512324052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb7d03414d985%3A0x274d82285a1fa51!2zQVJJREFOINCR0YPRhdCz0LDQu9GC0LXRgNGB0LrQsNGPINC60L7QvNC_0LDQvdC40Y8!5e0!3m2!1sru!2skg!4v1704650446183!5m2!1sru!2skg" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
											</section>
											<section
												class="elementor-section elementor-inner-section elementor-element elementor-element-e39f67f elementor-section-boxed elementor-section-height-default elementor-section-height-default"
												data-id="e39f67f" data-element_type="section" data-settings="{'
												background_background':'classic'}">
												<div class="elementor-container elementor-column-gap-no">
													<div class="elementor-row">
														<div class="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-a69a99a"
															data-id="a69a99a" data-element_type="column">
															<div
																class="elementor-column-wrap elementor-element-populated">
																<div class="elementor-widget-wrap">
																	<div class="elementor-element elementor-element-3d8e32a elementor-widget elementor-widget-text-editor"
																		data-id="3d8e32a" data-element_type="widget"
																		data-widget_type="text-editor.default">
																		<div class="elementor-widget-container">
																			<div
																				class="elementor-text-editor elementor-clearfix">
																				<p class="copyright-text"> 
																						ADB Solution
																						2024 
																				</p>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
											</section>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
				</div>
			</div>
		</div>
	</footer>

    )
};



