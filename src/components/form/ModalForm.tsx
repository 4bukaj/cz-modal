import React from "react";
import { useForm, Controller } from "react-hook-form";
import styles from "./ModalForm.module.css";
import Input from "./input/Input";
import Button from "../button/Button";
import TextArea from "./text-area/TextArea";
import RatingOne from "../../img/score1.png";
import RatingTwo from "../../img/score2.png";
import RatingThree from "../../img/score3.png";
import RatingFour from "../../img/score4.png";
import RatingFive from "../../img/score5.png";

export default function ModalForm(props) {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.formControls}>
        <div className={styles.radioControls}>
          <label>
            <input
              type="radio"
              name="rating"
              value="rating1"
              {...register("rating", { required: true })}
            />
            <img src={RatingOne} alt="Rating1" />
          </label>
          <label>
            <input
              type="radio"
              name="rating"
              value="rating2"
              {...register("rating", { required: true })}
            />
            <img src={RatingTwo} alt="Rating2" />
          </label>
          <label>
            <input
              type="radio"
              name="rating"
              value="rating3"
              {...register("rating", { required: true })}
            />
            <img src={RatingThree} alt="Rating3" />
          </label>
          <label>
            <input
              type="radio"
              name="rating"
              value="rating4"
              {...register("rating", { required: true })}
            />
            <img src={RatingFour} alt="Rating4" />
          </label>
          <label>
            <input
              type="radio"
              name="rating"
              value="rating5"
              {...register("rating", { required: true })}
            />
            <img src={RatingFive} alt="Rating5" />
          </label>
        </div>
        {errors.Rating && <p className={styles.ratingError}>Wybierz ocenę</p>}
        <div className={styles.inputsContainer}>
          <Controller
            name="autor"
            control={control}
            defaultValue=""
            rules={{ required: "Autor field is required" }}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <Input
                onChange={onChange}
                value={value}
                errorMessage={error}
                name="autor"
                label="Autor"
                id="autor"
                placeholder="Wpisz imię i nazwisko"
                type="text"
                error={errors.autor}
              />
            )}
          />
          <Controller
            name="email"
            control={control}
            defaultValue=""
            rules={{
              required: "Email field is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            }}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <Input
                onChange={onChange}
                value={value}
                errorMessage={error}
                name="email"
                label="Adres email"
                id="email"
                placeholder="adres@mail.com"
                type="email"
                error={errors.email}
              />
            )}
          />
          <Controller
            name="opinia"
            control={control}
            defaultValue=""
            rules={{ required: "Opinia field is required" }}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextArea
                onChange={onChange}
                value={value}
                errorMessage={error}
                name="opinia"
                label="Twoja opinia"
                id="opinia"
                placeholder="Podziel się swoimi wrażeniami..."
                error={errors.opinia}
              />
            )}
          />
        </div>
      </div>
      <div className={styles.btnsContainer}>
        <Button
          type="button"
          text="Anuluj"
          btnStyle="outlined"
          onClick={props.onClose}
        />
        <Button type="submit" text="Prześlij" btnStyle="solid" />
      </div>
    </form>
  );
}
