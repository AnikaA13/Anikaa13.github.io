import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-skills-formular',
  standalone: true,
  imports: [RouterLink, NgIf, ReactiveFormsModule],
  templateUrl: './skills-formular.component.html',
  styleUrl: './skills-formular.component.scss'
})
export class SkillsFormularComponent implements OnInit {
  jobForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.jobForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      nominee: ['', Validators.required],
      nomineeTeam: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.jobForm.valid) {
      console.log(this.jobForm.value);
    }
  }
}
