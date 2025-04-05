"use client";
import React, { useEffect, useState } from "react";
import styles from "@/styles/p-user/sendTicket.module.css";
import Link from "next/link";
import { IoIosSend } from "react-icons/io";
import { Department } from "@/app/types/types";

function SendTicket() {
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");
  const [departments, setDepartments] = useState<Department[]>([]);
  const [departmentID, setDepartmentID] = useState<string>("-1");
  const [priority, setPriority] = useState<number>(1);

  useEffect(() => {
    const getDepartments = async () => {
      const res = await fetch("/api/departments");
      const data: Department[] = await res.json();
      setDepartments([...data]);
    };

    getDepartments();
  }, []);

  const sendTicket = async () => {
    if (!title || departmentID === "-1") {
      alert("لطفا تمام فیلدهای الزامی را پر کنید.");
      return;
    }

    const ticket = {
      title,
      body,
      department: departmentID,
      priority,
    };

    const res = await fetch("/api/tickets", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(ticket),
    });

    if (res.status === 201) {
      swal({
        title: "تیکت شما با موفقیت ثبت شد",
        icon: "success",
        buttons: {
          confirm: {
            text: "مشاهده تیکت‌ها",
            value: true,
          },
        },
      }).then(() => {
        location.replace("/p-user/tickets");
      });
    } else {
      alert("مشکلی در ثبت تیکت وجود دارد. لطفا دوباره تلاش کنید.");
    }
  };

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>
        <span>ارسال تیکت جدید</span>
        <Link href="/p-user/tickets"> همه تیکت ها</Link>
      </h1>

      <div className={styles.content}>
        <div className={styles.group}>
          <label>دپارتمان را انتخاب کنید:</label>
          <select onChange={(event) => setDepartmentID(event.target.value)}>
            <option value="-1">لطفا دپارتمان را انتخاب نمایید</option>
            {departments.map((department) => (
              <option key={department._id} value={department._id}>
                {department.title}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.group}>
          <label>عنوان تیکت را وارد کنید:</label>
          <input
            placeholder="عنوان..."
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className={styles.group}>
          <label>سطح اولویت تیکت را انتخاب کنید:</label>
          <select
            value={priority}
            onChange={(event) => setPriority(parseInt(event.target.value))}
          >
            <option value="1">بالا</option>
            <option value="2">متوسط</option>
            <option value="3">کم</option>
          </select>
        </div>
      </div>
      <div className={styles.group}>
        <label>محتوای تیکت را وارد نمایید:</label>
        <textarea
          rows={10}
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
      </div>
      <div className={styles.uploader}>
        <span>حداکثر اندازه: 6 مگابایت</span>
        <span>فرمت‌های مجاز: jpg, png.jpeg, rar, zip</span>
        <input type="file" />
      </div>

      <button className={styles.btn} onClick={sendTicket}>
        <IoIosSend />
        ارسال تیکت
      </button>
    </main>
  );
}

export default SendTicket;