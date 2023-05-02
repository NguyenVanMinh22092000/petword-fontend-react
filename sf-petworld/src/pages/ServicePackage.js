import Layout from "../layout/Layout";
import OtherServiceSlide from "../components/service/OtherServiceSlide";
import './ServicePackage.css';
import {useRouteLoaderData, json, useNavigation} from "react-router-dom";
import React, {useState} from "react";
import BreadcrumbService from "../components/breadcrumb/BreadcrumbService";
import ServiceNavigation from "../components/service/ServiceNavigation";
export const ServicePackage = () => {
    const servicePackages = useRouteLoaderData('servicePackages');

    const nav = useNavigation();
    const loading = nav.state ===  'loading';
    if (loading) {
        console.log('Navigation is loading');
    }
    return (
        <Layout>
            <BreadcrumbService/>
            <div className='service-package'>
                <div className="service-package-wrapper">
                    <div className="service-package-sidebar">
                        <div className="service-package-check-box-item">
                            <h5 className="service-package-widget-title">Order</h5>
                            <div className="service-package-checkbox-container">
                              <label className="service-package-checkbox-label">
                                Option 1
                                <input type="checkbox" defaultChecked="checked" />
                                <span className="service-package-checkmark" />
                              </label>
                              <label className="service-package-checkbox-label">
                                Option 2
                                <input type="checkbox" />
                                <span className="service-package-checkmark" />
                              </label>
                              <label className="service-package-checkbox-label">
                                Option 3
                                <input type="checkbox" />
                                <span className="service-package-checkmark" />
                              </label>
                              <label className="service-package-checkbox-label">
                                Option 4
                                <input type="checkbox" />
                                <span className="service-package-checkmark" />
                              </label>
                              <label className="service-package-checkbox-label">
                                Bones &amp; Rawhide
                                <input type="checkbox" />
                                <span className="service-package-checkmark" />
                              </label>
                            </div>
                        </div>
                    </div>
                    <div className="service-package-content">
                        <OtherServiceSlide servicePackages={servicePackages} />
                    </div>
                </div>
            </div>
            <ServiceNavigation/>
        </Layout>
    )
}

export async function loaderPackages({request, params}) {
    const name = params.name;
    const response = await fetch('https://6436d35a3e4d2b4a12dcb9a2.mockapi.io/api/v1/service-packages/'  );
    if (!response.ok) {
        throw json({message: "no result"}, {status: 500})
    } else {
        const resData = await response.json();
        return resData;
    }
};