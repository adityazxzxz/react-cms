import React from 'react'

const Sidebar = () => (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
                <a href="../../index3.html" className="brand-link">
                    <img src="../../dist/img/AdminLTELogo.png"
                        alt="AdminLTE Logo"
                        className="brand-image img-circle elevation-3"
                        style={{ opacity: .8 }} />
                    <span className="brand-text font-weight-light">AdminLTE 3</span>
                </a>
                <div className="sidebar">
                    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                        <div className="image">
                            <img src="../../dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
                        </div>
                        <div className="info">
                            <a href="#" className="d-block">Alexander Pierce</a>
                        </div>
                    </div>
                    <nav className="mt-2">
                        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                            <li className="nav-item has-treeview">
                                <a href="#" className="nav-link">
                                    <i className="nav-icon fas fa-tachometer-alt"></i>
                                    <p>
                                        Dashboard
                <i className="right fas fa-angle-left"></i>
                                    </p>
                                </a>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <a href="../../index.html" className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Dashboard v1</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="../../index2.html" className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Dashboard v2</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="../../index3.html" className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Dashboard v3</p>
                                        </a>
                                    </li>
                                </ul>
                            </li>

                            <li className="nav-item has-treeview">
                                <a href="#" className="nav-link">
                                    <i className="nav-icon fas fa-edit"></i>
                                    <p>
                                        Forms
                <i className="fas fa-angle-left right"></i>
                                    </p>
                                </a>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <a href="../forms/general.html" className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>General Elements</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="../forms/advanced.html" className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Advanced Elements</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="../forms/editors.html" className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Editors</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="../forms/validation.html" className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Validation</p>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item has-treeview">
                                <a href="#" className="nav-link">
                                    <i className="nav-icon fas fa-table"></i>
                                    <p>
                                        Tables
                <i className="fas fa-angle-left right"></i>
                                    </p>
                                </a>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <a href="../tables/simple.html" className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Simple Tables</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="../tables/data.html" className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>DataTables</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="../tables/jsgrid.html" className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>jsGrid</p>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-header">EXAMPLES</li>
                            <li className="nav-item">
                                <a href="../calendar.html" className="nav-link">
                                    <i className="nav-icon far fa-calendar-alt"></i>
                                    <p>
                                        Calendar
                <span className="badge badge-info right">2</span>
                                    </p>
                                </a>
                            </li>

                            <li className="nav-item has-treeview">
                                <a href="#" className="nav-link">
                                    <i className="nav-icon fas fa-book"></i>
                                    <p>
                                        Pages
                <i className="fas fa-angle-left right"></i>
                                    </p>
                                </a>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <a href="../examples/invoice.html" className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Invoice</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="../examples/profile.html" className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Profile</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="../examples/e-commerce.html" className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>E-commerce</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="../examples/projects.html" className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Projects</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="../examples/project-add.html" className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Project Add</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="../examples/project-edit.html" className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Project Edit</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="../examples/project-detail.html" className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Project Detail</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="../examples/contacts.html" className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Contacts</p>
                                        </a>
                                    </li>
                                </ul>
                            </li>


                        </ul>
                    </nav>
                </div>
            </aside>
)

export default Sidebar;